// src/features/todos/components/TodoItem/TodoItem.js
import React, { useState, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { STATUSES } from '../../../../config/constants';
import {
  ItemContainer,
  StatusLabel,
  Title,
  Description,
  DateTimePickerContainer,
  DateTimeLabel,
  DateTimeInput,
  OverdueIndicator,
  TimestampText
} from './TodoItem.styles';

function TodoItem({ task, index, onOpenContextMenu, onUpdateTaskDueDate, onSetOverdue }) {
  const [isOverdue, setIsOverdue] = useState(false);

  useEffect(() => {
    let intervalId;
    if (task.status === STATUSES.ONGOING && task.dueDateTime) {
      const checkOverdue = () => {
        const now = new Date();
        const dueDate = new Date(task.dueDateTime);
        const overdue = dueDate < now;

        if (overdue !== isOverdue) {
          setIsOverdue(overdue);
          if (overdue && !task.alerted) {
            onSetOverdue(task.id, true);
            alert(`Task "${task.title}" is overdue!`);
          }
        }
      };

      checkOverdue();
      intervalId = setInterval(checkOverdue, 60000);

      return () => clearInterval(intervalId);
    } else {
      setIsOverdue(false);
      if (intervalId) clearInterval(intervalId);
    }
  }, [task.status, task.dueDateTime, task.title, task.id, onSetOverdue, task.alerted, isOverdue]);

  const handleContextMenu = (event) => {
    event.preventDefault();
    onOpenContextMenu(event.clientX, event.clientY, task);
  };

  const handleDueDateChange = (e) => {
    onUpdateTaskDueDate(task.id, e.target.value);
  };

  const getStatusTypeForLabel = () => {
    if (task.status === STATUSES.ONGOING && isOverdue) {
      return 'OVERDUE';
    }
    return task.status;
  };

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <ItemContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onContextMenu={handleContextMenu}
          $isDragging={snapshot.isDragging}
          style={{
            ...provided.draggableProps.style, // essential for smooth dragging
            userSelect: 'none'
          }}
        >
          <StatusLabel $statusType={getStatusTypeForLabel()}>
            {task.status === STATUSES.ONGOING && isOverdue ? 'OVERDUE' : task.status}
          </StatusLabel>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>

          {task.status === STATUSES.ONGOING && (
            <DateTimePickerContainer>
              <DateTimeLabel htmlFor={`due-date-${task.id}`}>Due:</DateTimeLabel>
              <DateTimeInput
                type="datetime-local"
                id={`due-date-${task.id}`}
                value={task.dueDateTime || ''}
                onChange={handleDueDateChange}
                onClick={(e) => e.stopPropagation()}
              />
              {isOverdue && <OverdueIndicator>Task is overdue!</OverdueIndicator>}
            </DateTimePickerContainer>
          )}

          {task.movedToOngoingAt && task.status !== STATUSES.NEW && (
            <TimestampText>
              Moved to Ongoing: {new Date(task.movedToOngoingAt).toLocaleString()}
            </TimestampText>
          )}

          {task.completedAt && task.status === STATUSES.DONE && (
            <TimestampText>
              Completed: {new Date(task.completedAt).toLocaleString()}
            </TimestampText>
          )}
        </ItemContainer>
      )}
    </Draggable>
  );
}

export default TodoItem;
