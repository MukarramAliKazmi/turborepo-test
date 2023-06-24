import React from 'react'

export interface DisciplineCardProps {
  name: string
  semesters: number
  students: number
  teachers: number
  courses: number
}

export const DisciplineCard: React.FC<DisciplineCardProps> = ({ ...rest }) => (
  <div className="p-4 overflow-hidden border border-gray-200 dark:border-gray-800 rounded-3xl transition-[border,transform] duration-500 cursor-pointer md:hover:scale-105">
    <div className="text-sky-500 font-bold text-xl mb-4">{rest.name}</div>
    <ul className="flex flex-col gap-1">
      <li>Semesters: {rest.semesters}</li>
      <li>Students: {rest.students}</li>
      <li>Teachers: {rest.teachers}</li>
      <li>Courses: {rest.courses}</li>
    </ul>
  </div>
)
