// src/features/todos/components/ContextMenu/ContextMenu.styles.js
import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 5px 0;
  z-index: 1000;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
`;

export const MenuList = styled.ul`
  /* ul reset is in GlobalStyles */
`;

export const MenuItem = styled.li`
  padding: 8px 15px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
