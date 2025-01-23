import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodoHandler = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditTodoId(id);
      setEditTodoText(todoToEdit.text);
    }
  };

  const saveEditedTodo = () => {
    if (editTodoText.trim() !== "") {
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
      );
      setTodos(updatedTodos);
      setEditTodoId(null);
      setEditTodoText("");
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-text">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              {editTodoId === todo.id ? (
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                  className="edit-input"
                />
              ) : (
                <span
                  className={todo.completed ? "completed" : ""}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div className="todo-actions">
              {editTodoId === todo.id ? (
                <button onClick={saveEditedTodo}>Save</button>
              ) : (
                <button onClick={() => editTodoHandler(todo.id)}>Edit</button>
              )}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
