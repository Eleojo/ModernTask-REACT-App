import styles from "./todoItem.module.css";
export default function TodoItem({ index, todos, setTodos }) {
  function handleDelete(index) {
    console.log(`deletbutton clicked for item ${todos[index]}`);

    setTodos(todos.filter((_, i) => i !== index));
  }
  function handleClick(index) {
    let updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done; //update done property
    setTodos(updatedTodos.sort((a, b) => Number(a.done) - Number(b.done)));
  }
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemName}>
        <span
          onClick={() => handleClick(index)}
          className={todos[index].done ? styles.completed : ""}
        >
          {todos[index].name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(index)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
