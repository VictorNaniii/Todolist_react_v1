import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (txt) => {
    setTodos([...todos, txt])
  }
  const delTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1 className="Heder">Hello from app js</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={delTodoHandler} />
    </div>
  )
}

export default App
