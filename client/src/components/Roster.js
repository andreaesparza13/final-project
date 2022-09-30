import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import StudentCard from './StudentCard'

function Roster() {

   const {section_id} = useParams()
   const [students, setStudents] = useState([])

   useEffect(() => {
      fetch(`sections/${section_id}/students`)
      .then(res => res.json())
      .then(data => setStudents(data))
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
      <div>
         {classRoster}
      </div>
   )
}

export default Roster