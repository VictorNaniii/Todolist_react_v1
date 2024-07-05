import Todo from './Todo'
import styles from './TodoList.module.css'
console.log('din todolist' + { Todo })
console.log(Todo)
function TodoList(props) {
  const { todos, deleteTodo } = props

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is emty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
