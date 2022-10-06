import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TeacherAssignmentCard from './TeacherAssignmentCard'

function SectionAssignments({ currentUser }) {
   
   const params = useParams()
   const section_id = parseInt(params.section_id)
   const [assignments, setAssignments] = useState([])
   const [showForm, setShowForm] = useState(false)
   const [title, setTitle] = useState("") // eslint-disable-line
   const [due_date, setDueDate] = useState("") // eslint-disable-line


   useEffect(() => {
      if (currentUser !== null) {
         fetch(`/sections/${section_id}/assignments`)
         .then(res => res.json())
         .then(data => setAssignments(data))
      }
   }, [section_id, currentUser])

   function toggleForm() { // eslint-disable-line
      setShowForm(!showForm)
   }

   function handleSubmit(e) { // eslint-disable-line
      e.preventDefault()
      fetch("assignments", {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ section_id, title, due_date })
      }
      .then(res => {
         if (res.ok) {
            res.json().then(data => setAssignments(assignments => [...assignments, data]))
         }
      })
   )}

   const assignmentsBySection = assignments.map(assignment => (
      <TeacherAssignmentCard 
         title = {assignment.title}
         due_date = {assignment.due_date}
         period = {assignment.section.period}
         subject = {assignment.section.subject}
         key = {assignment.id}
      />
   ))

   return (
      <div className="bg-subtle min-h-screen w-full bg-center m-0">
         <div className='flex flex-wrap justify-center'>
            {assignmentsBySection}
         </div>
         <div className="flex flex-wrap justify-center">
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mr-2 rounded bg-white outline-none focus:outline-none ease-linear transition-all duration-150" onClick={toggleForm}>
               Add Assignment
            </button>
         </div>
         <div>
            {showForm ? 
               <form onSubmit={handleSubmit} className="m-2 flex flex-col justify-center items-center ml-auto mr-auto w-72 border-4 bg-white">
                  <div className="mt-5 mb-4 w-64">
                     <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="section-id">
                        Section ID: 
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="section-id" value={section_id} disabled/>
                  </div>
                  <div className="mb-4 w-64">
                     <label className="block text-slate-700 text-sm font-bold mb-2">
                        Title: 
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                     </label>
                  </div>
                  <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                     <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                  </div>
                  <input datepicker="true" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" value={due_date} onChange={e => setDueDate(e.target.value)} />
                  </div>
                  <br/>
                  <div>
                     <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mb-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="submit">
                        Submit
                     </button>
                  </div>
               </form> 
               : null}
         </div>
      </div>
   )
}

export default SectionAssignments

