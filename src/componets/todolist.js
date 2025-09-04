import React from 'react';

export default function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    if (onDelete) onDelete(todo);
  };

  return (
    <div className="card my-2">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
        </div>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
