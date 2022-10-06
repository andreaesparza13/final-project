import React, { useState } from 'react'

function AssignmentCard({ title, due_date, period, subject }) {

   const [priority, setPriority] = useState(false)
   const [turnedIn, setTurnedIn] = useState(false)

   function handleTurnIn() {
      setTurnedIn(!turnedIn)
      setPriority(false)
   }

   function handlePriority() {
      if (turnedIn === false) {
      setPriority(!priority)
      }
   }

   const divProperties = priority ? "p-6 w-64 bg-red-300 rounded-lg border border-red-200 shadow-md dark:bg-red-800 dark:border-red-700 m-6 ml-auto mr-auto" : "p-6 w-64 bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto"

   return (
      <div className={divProperties} >
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Subject: {subject}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Period: {period}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400">Due Date: {due_date}</p>
         <div>
            <label className="inline-flex relative items-center mr-5 cursor-pointer font-medium text-black mb-3 dark:text-gray-400">
               <input type="checkbox" value="" id="turned-in" className="sr-only peer" onChange={handleTurnIn}/>
               <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
               &nbsp;{turnedIn ? "Done!" : "Need to do"} <br/>
            </label>
         </div>
         <div>
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mr-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150" onClick={handlePriority}>
               Priority
            </button>
         </div>
      </div>

   )
}

export default AssignmentCard