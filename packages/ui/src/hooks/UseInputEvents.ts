import React, { useState } from 'react'

type InputProps = React.HTMLProps<HTMLInputElement>

const useInputEvents = ({ ...rest }: InputProps) => {
  const [value, setValue] = useState('')
  const [focus, setFocus] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (rest.onChange) {
      rest.onChange(e)
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true)
    if (rest.onFocus) {
      rest.onFocus(e)
    }
  }

  const handleBlue = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false)
    if (rest.onBlur) {
      rest.onBlur(e)
    }
  }

  return { value, focus, handleChange, handleFocus, handleBlue }
}

export default useInputEvents
