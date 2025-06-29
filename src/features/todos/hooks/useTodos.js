// src/features/todos/hooks/useTodos.js
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { STATUSES } from '../constants/taskConstants';

export default function useTodos() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('kanbanTasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status: STATUSES.NEW,
      createdAt: new Date().toISOString(),
      movedToOngoingAt: null,
      dueDateTime: null,
      completedAt: null,
      alerted: false,
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateDueDate = (taskId, dueDateTime) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, dueDateTime, alerted: false } : task
      )
    );
  };

  const setOverdueAlert = (taskId, alerted) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, alerted } : task
      )
    );
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id !== taskId) return task;
        const updates = {
          status: newStatus,
          alerted: newStatus !== STATUSES.ONGOING ? false : task.alerted
        };
        if (newStatus === STATUSES.ONGOING && !task.movedToOngoingAt) {
          updates.movedToOngoingAt = new Date().toISOString();
        }
        if (newStatus === STATUSES.DONE && !task.completedAt) {
          updates.completedAt = new Date().toISOString();
        }
        return { ...task, ...updates };
      })
    );
  };

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    setTasks(prevTasks => {
      const taskIndex = prevTasks.findIndex(task => task.id === draggableId);
      if (taskIndex === -1) return prevTasks;

      const draggedTask = { ...prevTasks[taskIndex] };

      if (source.droppableId !== destination.droppableId) {
        draggedTask.status = destination.droppableId;
        if (destination.droppableId === STATUSES.ONGOING && !draggedTask.movedToOngoingAt) {
          draggedTask.movedToOngoingAt = new Date().toISOString();
        }
        if (destination.droppableId === STATUSES.DONE && !draggedTask.completedAt) {
          draggedTask.completedAt = new Date().toISOString();
        }
      }

      const remainingTasks = prevTasks.filter(task => task.id !== draggableId);
      const targetColumnTasks = remainingTasks.filter(task => task.status === draggedTask.status);
      const otherTasks = remainingTasks.filter(task => task.status !== draggedTask.status);

      targetColumnTasks.splice(destination.index, 0, draggedTask);

      return [...otherTasks, ...targetColumnTasks];
    });
  };

  return {
    tasks,
    setTasks,
    addTask,
    updateDueDate,
    setOverdueAlert,
    moveTask,
    handleDragEnd,
  };
}
