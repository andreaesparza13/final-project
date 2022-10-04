import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import StudentCard from './StudentCard'

function Roster() {

   const params = useParams()
   const section_id = parseInt(params.section_id)
   const [students, setStudents] = useState([])
   const [showForm, setShowForm] = useState(false)
   const [studentId, setStudentId] = useState(0)

   useEffect(() => {
      fetch(`/sections/${section_id}/students`)
      .then(res => res.json())
      .then(data => setStudents(data))
   }, [section_id]) 

   const classRoster = students.map(student => (
         <StudentCard
            first_name = {student.first_name}
            last_name = {student.last_name}
            grade_level = {student.grade_level}
            preferred_name = {student.preferred_name}
            pronouns = {student.pronouns}
            private_pronouns = {student.private_pronouns}
            extra_info = {student.extra_info}
            key = {student.id}
            id = {student.id}
         />
      ))

      function toggleForm() {
         setShowForm(!showForm)
      }

      function handleSubmit() {
         fetch("section_student_joins", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, section_id })
         }
         .then(res => {
            if (res.ok) {
               res.json()
               .then(data => setStudents([...students, data]))
            }
         })
      )}

   return (
      <>
      <div className="flex flex-wrap justify-center">
         {classRoster}
      </div>
      <div className="flex flex-wrap justify-center">
         <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mr-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150" onClick={toggleForm}>
				Add Student
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
                  <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="student-id">
                     Student ID: 
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="student-id" value={studentId} onChange={e => setStudentId(e.target.value)}/>
               </div>
               <div>
                  <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mb-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="submit">
				         Submit
                  </button>
               </div>
            </form> 
            : null}
      </div>
      </>
   )
}

export default Roster