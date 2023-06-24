import React from 'react'
import useInputEvents from '@/hooks/use-input-events'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const { value, focus, handleChange, handleFocus, handleBlue } =
    useInputEvents(rest)

  const labelPosition = focus || value ? 'top-1' : 'top-4'

  return (
    <div className="relative">
      <input
        {...rest}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlue}
        className={`border border-gray-200 dark:border-gray-800 duration-500 w-full rounded-lg px-4 py-2 pt-6 outline-none bg-transparent focus:border-sky-500 transition-[border] ${rest.className}`}
      />
      <label
        htmlFor={rest.id}
        className={`absolute left-0 px-4 text-sky-500 transition-[top] duration-500 ${labelPosition}`}
      >
        {label}
      </label>
    </div>
  )
}
