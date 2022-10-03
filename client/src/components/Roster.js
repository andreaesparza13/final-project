import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import StudentCard from './StudentCard'

function Roster() {

   const params = useParams()
   const section_id = parseInt(params.section_id)
   const [students, setStudents] = useState([])

   // console.log(params)
   // console.log("section id",section_id)

   useEffect(() => {
      fetch(`/sections/${section_id}/students`)
      .then(res => res.json())
      .then(data => setStudents(data))
   }, [section_id]) 

   // console.log(students)

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
         />
      ))

   return (
      <div className="flex flex-wrap justify-center">
         {classRoster}
      </div>
   )
}

export default Roster