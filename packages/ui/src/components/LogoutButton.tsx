import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'

export interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = () => (
  <button
    type="submit"
    className="flex items-center gap-2 w-full font-semibold text-sky-500 md:hover:gap-4 duration-500 transition-all shadow-[0px_-20px_30px_30px_rgba(255,255,255)] dark:shadow-[0px_-20px_30px_30px_rgb(17,24,39)] z-40 [clip-path:inset(-100px_0px_0px_0px)]"
  >
    Logout
    <IoLogOutOutline className="w-6 h-6 fill-sky-500 " />
  </button>
)
