import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TeacherAssignmentCard from './TeacherAssignmentCard'

function SectionAssignments({ currentUser }) {
   
   const params = useParams()
   const section_id = parseInt(params.section_id)
   const [assignments, setAssignments] = useState([])

   useEffect(() => {
      if (currentUser !== null) {
         fetch(`/sections/${section_id}/assignments`)
         .then(res => res.json())
         .then(data => setAssignments(data))
      }
   }, [section_id, currentUser])

   console.log(section_id)
   console.log(assignments)

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
      <div className='flex flex-wrap justify-center'>
         {assignmentsBySection}
      </div>
   )
}

export default SectionAssignments