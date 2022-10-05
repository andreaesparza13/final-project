import React from 'react'
import { Link } from 'react-router-dom'

function ClassCard({ subject, period, id }) {

   function handleDeleteClass() {
      fetch(`sections/${id}`, {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'}
      })
      .then(res => {
         if (res.ok) {
            handleDeleteClass(id)
         }
      })
   }

   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Subject: {subject}</h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >Period: {period}</p>
         <nav className='mb-4'>
            <Link to={`roster/${id}`} className="text-slate-500 border border-slate-500 bg-white hover:bg-slate-500 hover:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-2 mt-2 ease-linear transition-all duration-150">
               View Students
            </Link>
         </nav>
         <nav className='mt-2'>
            <Link to={`assignments/${id}`} className="text-slate-500 border border-slate-500 bg-white hover:bg-slate-500 hover:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mt-2 mb-2 ease-linear transition-all duration-150">
               View Assignments
            </Link>
         </nav>
         <button className="text-slate-500 border border-slate-500 bg-white hover:bg-slate-500 hover:text-white font-bold uppercase text-xs px-4 p-2 rounded outline-none focus:outline-none mr-1 mt-3 mb-1 ease-linear transition-all duration-150" onClick={handleDeleteClass}>
            Remove Class
         </button>
      </div>
   )
}

export default ClassCard