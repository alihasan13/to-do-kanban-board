// src/features/todos/components/KanbanBoard/KanbanBoard.styles.js
import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* For responsiveness */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;