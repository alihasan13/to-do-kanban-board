// src/features/todos/components/TodoItem/TodoItem.styles.js
import styled, { css } from 'styled-components';
import { STATUS_COLORS } from '../../../../config/constants';

export const ItemContainer = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: grab;
  position: relative;

  ${props => props.isDragging && css`
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transform: rotate(3deg); /* Example dragging style */
  `}

  &:active {
    cursor: grabbing;
  }
`;

export const StatusLabel = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
  background-color: ${({ $statusType }) => STATUS_COLORS[$statusType] || '#bdc3c7'};
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  color: #2c3e50;
`;

export const Description = styled.p`
  font-size: 0.9em;
  color: #7f8c8d;
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

export const DateTimePickerContainer = styled.div`
  margin-top: 8px;
  font-size: 0.85em;
`;

export const DateTimeLabel = styled.label`
  margin-right: 5px;
  font-weight: bold;
`;

export const DateTimeInput = styled.input`
  padding: 4px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

export const OverdueIndicator = styled.div`
  font-weight: bold;
  color: ${STATUS_COLORS.OVERDUE};
  font-size: 0.9em;
  margin-top: 5px;
`;

export const TimestampText = styled.p`
  font-size: 0.75em;
  color: #555;
  margin-top: 5px;
  margin-bottom: 0;
`;