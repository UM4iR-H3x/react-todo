import React from 'react';
import TodoItem from './todolist';

export default function Todo(props) {
  return (
    <div className="container my-3">
      <h1>Todo List</h1>
      {props.todo.length === 0 ? "No Todos to display" : 
      (props.todo && props.todo.map((t) => (
        <TodoItem key={t.id} todo={t} onDelete={props.onDelete} />
      )))}
    </div>
  );
}
