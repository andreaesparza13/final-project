import React from 'react'

function TeacherAssignmentCard({ title, due_date, period, subject}) {
   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Subject: {subject}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Period: {period}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Due Date: {due_date}</p>
      </div>
   )
}

export default TeacherAssignmentCard