import { useState } from "react"

export const useForm = (initialForm = {}) => {

  const [formState, setState] = useState( initialForm )

  const onInputChange = ({target}) => {
    setState({
      ...formState,
      [target.name] : target.value,
    })
  }
  const onResetForm = (e) => {
    setState( initialForm )
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }

}
