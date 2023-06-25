import React from 'react'

export interface InputElementProps {
  props: React.HTMLProps<HTMLInputElement>
}

export const InputElement: React.FC<InputElementProps> = ({ props }) => (
  <input
    {...props}
    className={`border border-gray-200 dark:border-gray-800 duration-500 w-full rounded-lg px-4 py-2 pt-6 outline-none bg-transparent focus:border-sky-500 transition-[border] ${props.className}`}
  />
)
