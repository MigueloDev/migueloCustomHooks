
export const todoReducer = ( initialState = [], action = {} ) => {
  switch (action.type) {
    case '[TODO] Add Todo':
        console.log(action);
        return [ ...initialState, action.payload ]

    case '[TODO] Remove Todo':
        return initialState.filter(todo => todo.id !== action.payload)
  
    case '[TODO] Mark as done':
        return initialState.map(todo => {
          if(todo.id === action.payload){
            return {
              ...todo,
              done: !todo.done
            }
          }

          return todo
        })
    default:
      return initialState
  }

}
