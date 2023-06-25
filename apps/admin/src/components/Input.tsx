'use client'

import React from 'react'
import useInputEvents from '@/hooks/UseInputEvents'
import { InputElement, InputLabel } from 'ui'

export interface InputProps {
  label: string
  input: React.HTMLProps<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({ label, input }) => {
  const { value, focus, handleChange, handleFocus, handleBlue } =
    useInputEvents(input)

  const labelPosition = focus || value ? 'top-1' : 'top-4'

  return (
    <div className="relative">
      <InputElement
        props={{
          ...input,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlue,
        }}
      />
      <InputLabel text={label} position={labelPosition} />
    </div>
  )
}
