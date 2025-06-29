// src/features/todos/components/Column/Column.styles.js
import styled from 'styled-components';

export const ColumnContainer = styled.div`
  background-color: #e3e3e3;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  min-height: 400px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.h3`
  font-size: 1.5em;
  color: #34495e;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #bdc3c7;
  text-align: center;
`;

export const DroppableArea = styled.div`
  min-height: 495px;
  padding: 8px;
  background-color: ${({ $isDraggingOver }) => ($isDraggingOver ? '#e0f7fa' : '#f5f5f5')};
  transition: background-color 0.2s ease;
  border-radius: 8px;
`;

export const AddTaskButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95em;
  font-weight: bold;
  transition: background-color 0.2s ease;
  align-self: center;

  &:hover {
    background-color: #2980b9;
  }
`;