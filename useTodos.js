import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = ( initialState ) => {

  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos])

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload : todo
    }

    dispatch(action)
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type:'[TODO] Mark as done',
      payload: id
    })
  }

  const pendingTodos = todos.filter(todo => !todo.done).length;
  const countTodos = todos.length;


  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodos,
    countTodos
  }

}
