import { RiTodoLine } from 'react-icons/ri'

import style from './Todo.module.css'
function Todo(props) {
  const { todo, index, deleteTodo } = props
  return (
    <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoLine className={style.todoItem} />
      <div className="style.todoText">{todo}</div>
    </div>
  )
}

export default Todo
