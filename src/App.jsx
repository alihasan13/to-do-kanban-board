// src/app/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import KanbanBoard from './features/todos/components/KanbanBoard/KanbanBoard';
import ContextMenu from './features/todos/components/ContextMenu/ContextMenu';

import useTodos from './features/todos/hooks/useTodos';

const theme = {
  primaryColor: '#1abc9c',
  secondaryColor: '#34495e',
};
const AppHeader = styled.header`
  margin-bottom: 30px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin: 0;
  }
`;

function App() {
  const {
  tasks,
  setTasks,
  addTask,
  updateDueDate,
  setOverdueAlert,
  moveTask,
  handleDragEnd,
} = useTodos();

  const [contextMenu, setContextMenu] = useState(null);

  const openContextMenu = (x, y, task) => setContextMenu({ x, y, task });
  const closeContextMenu = () => setContextMenu(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ padding: '1rem' }}>
        <AppHeader>
          <h1>Kanban Todo List 📝</h1>
        </AppHeader>

        <KanbanBoard
  tasks={tasks}
  setTasks={setTasks}
  onAddTask={addTask}
  onDragEnd={handleDragEnd}
  onOpenContextMenu={openContextMenu}
  onUpdateTaskDueDate={updateDueDate}
  onSetOverdue={setOverdueAlert}
/>

        {contextMenu && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            task={contextMenu.task}
            onMoveTask={moveTask}
            onClose={closeContextMenu}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
