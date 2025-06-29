// src/features/todos/components/TodoForm/TodoForm.js
import React, { useState } from 'react';
import {FormContainer,Input,Textarea,SubmitButton} from './TodoForm.styles'; // S for Styled

function TodoForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Title is required!');
      return;
    }
    onAddTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <SubmitButton type="submit">Add Task</SubmitButton>
    </FormContainer>
  );
}

export default TodoForm;