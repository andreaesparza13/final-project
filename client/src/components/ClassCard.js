import React from 'react'
import { NavLink } from 'react-router-dom'
// import StudentList from './StudentList'

function ClassCard({ subject, period }) {

   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Subject: {subject}</h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >Period: {period}</p>
         <NavLink to="/roster" className="text-slate-500 border border-slate-500 bg-white hover:bg-slate-500 hover:text-white font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            View Students
         </NavLink>
      </div>
   )
}

export default ClassCard