import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", completed: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
        />
        <button type="submit" className={styles.todoButton}>
          Add
        </button>
      </div>
    </form>
  );
}
