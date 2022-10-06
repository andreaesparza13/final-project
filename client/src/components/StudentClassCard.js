import React from 'react'

function StudentClassCard({subject, period, teacher}) {
   return (
      <div className="p-6 w-56 bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <p className="font-semibold text-xl text-black mb-3 dark:text-white" >Period: {period}</p>
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{subject}</h5>
         <p className="font-semibold text-xl text-black mb-3 dark:text-white" >Teacher: <br/>{teacher}</p>
      </div>
      )
}

export default StudentClassCard