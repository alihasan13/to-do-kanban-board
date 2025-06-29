// src/features/todos/components/ContextMenu/ContextMenu.js
import React, { useEffect, useRef } from 'react';
import { STATUSES } from '../../../../config/constants';
import {MenuContainer,MenuList,MenuItem} from './ContextMenu.styles';

function ContextMenu({ x, y, task, onMoveTask, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!task) return null;

  const possibleMoves = Object.values(STATUSES).filter(status => status !== task.status);

  return (
    <MenuContainer x={x} y={y} ref={menuRef}>
      <MenuList>
        {possibleMoves.map(status => (
          <MenuItem key={status} onClick={() => { onMoveTask(task.id, status); onClose(); }}>
            Move to {status}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
}

export default ContextMenu;