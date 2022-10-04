import React from 'react'

function StudentClassCard({subject, period}) {
   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <p className="font-bold text-xl text-black mb-3 dark:text-white" >Period: {period}</p>
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{subject}</h5>
      </div>
      )
}

export default StudentClassCard