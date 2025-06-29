// src/features/todos/components/KanbanBoard/KanbanBoard.js
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column';
import { STATUSES, COLUMN_IDS } from '../../../../config/constants';
import { BoardContainer } from './KanbanBoard.styles';

function KanbanBoard({
  tasks,
  onDragEnd,
  onAddTask,
  onOpenContextMenu,
  onUpdateTaskDueDate,
  onSetOverdue
}) {
 

  const columnsData = [
    { id: COLUMN_IDS.NEW, title: STATUSES.NEW, tasks: tasks.filter(task => task.status === STATUSES.NEW) },
    { id: COLUMN_IDS.ONGOING, title: STATUSES.ONGOING, tasks: tasks.filter(task => task.status === STATUSES.ONGOING) },
    { id: COLUMN_IDS.DONE, title: STATUSES.DONE, tasks: tasks.filter(task => task.status === STATUSES.DONE) },
  ];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        {columnsData.map(col => (
          <Column
            key={col.id}
            columnId={col.id}
            title={col.title}
            tasks={col.tasks}
            onAddTask={onAddTask}
            onOpenContextMenu={onOpenContextMenu}
            onUpdateTaskDueDate={onUpdateTaskDueDate}
            onSetOverdue={onSetOverdue}
          />
        ))}
      </BoardContainer>
    </DragDropContext>
  );
}

export default KanbanBoard;
