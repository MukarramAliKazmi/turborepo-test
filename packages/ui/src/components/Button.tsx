import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`w-full rounded-lg text-white p-4 outline-none bg-sky-500 focus:border-sky-500 hover:bg-sky-600 ${rest.className}`}
  >
    {rest.children}
  </button>
)
