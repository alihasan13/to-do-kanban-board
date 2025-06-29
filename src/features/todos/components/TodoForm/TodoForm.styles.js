
// src/features/todos/components/TodoForm/TodoForm.styles.js
import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  resize: vertical;
  min-height: 60px;
`;

export const SubmitButton = styled.button`
  background-color: #1abc9c; /* Teal */
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 1em;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #16a085;
  }
`;
