import React, {  } from 'react'

function AssignmentCard({ title, due_date, turned_in, score, priority, period, subject, id }) {

   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Subject: {subject}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Period: {period}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Due Date: {due_date}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Turned In: {turned_in ? "Yes" : "No"}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Score: {score}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Priority: {priority ? "Yes" : "No"}</p>
      </div>

   )
}

export default AssignmentCard

//          {/* <label for="turned-in" className="inline-flex relative items-center mr-5 cursor-pointer">
// <input type="checkbox" value="" id="turned-in" className="sr-only peer" />
// <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
// <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{turned_in ? "Yes" : "No"}</span>
// </label> */}