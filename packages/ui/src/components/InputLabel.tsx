import React from 'react'

export interface InputLabelProps {
  text: string
  position: string
}

export const InputLabel: React.FC<InputLabelProps> = ({ text, position }) => (
  <label
    htmlFor={text}
    className={`absolute left-0 px-4 text-sky-500 transition-[top] duration-500 ${position}`}
  >
    {text}
  </label>
)
