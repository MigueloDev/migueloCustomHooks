import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

  const  [counter, setCounter] = useState( initialValue );
  
  const increment = ( event ) => {
    setCounter( (currentValue) => currentValue + 1 )
  }

  const reset = ( event ) => {
    setCounter( initialValue )
  }

  const decrement = ( event ) => {
    if(counter === 0 ) return;
    setCounter( (currentValue) => currentValue - 1 )
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }

}