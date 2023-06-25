import React from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

export interface ToggleThemeButtonProps {
  theme: string | undefined
  setTheme: (theme: string) => void
}

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  theme,
  setTheme,
}) => (
  <button
    type="button"
    onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
  >
    {theme === 'dark' ? (
      <BsMoonStarsFill className="w-6 h-6 fill-sky-500" />
    ) : (
      <BsSunFill className="w-6 h-6 fill-sky-500" />
    )}
  </button>
)
