import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import { STATUSES } from '../../../../config/constants';
import {
  ColumnContainer,
  ColumnTitle,
  DroppableArea,
  AddTaskButton
} from './Column.styles';

function Column({
  columnId,
  title,
  tasks,
  onAddTask,
  onOpenContextMenu,
  onUpdateTaskDueDate,
  onSetOverdue,
}) {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>

     {title === STATUSES.NEW && (
  <>
    <AddTaskButton onClick={handleToggleForm}>
      {showForm ? 'Cancel' : '+ Add Task'}
    </AddTaskButton>
    {showForm && <TodoForm onAddTask={onAddTask} />}
  </>
)}

      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <DroppableArea
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <TodoItem
                key={String(task.id)}
                task={task}
                index={index}
                onOpenContextMenu={onOpenContextMenu}
                onUpdateTaskDueDate={onUpdateTaskDueDate}
                onSetOverdue={onSetOverdue}
              />
            ))}
            {provided.placeholder}
          </DroppableArea>
        )}
      </Droppable>
    </ColumnContainer>
  );
}

export default Column;
