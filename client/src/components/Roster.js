import React from 'react'
import StudentCard from './StudentCard'

function Roster({ roster }) {
   console.log(roster)

   const students = roster.map(student => (
      <StudentCard
         first_name = {student.first_name}
         last_name = {student.last_name}
         grade_level = {student.grade_level}
         preferred_name = {student.preferred_name}
         pronouns = {student.pronouns}
         private_pronouns = {student.private_pronouns}
         key = {student.id}
         extra_info = {student.extra_info}
      />
   ))
   
   return (
      <div>
         {students}
      </div>
   )
}

export default Roster