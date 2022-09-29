import React, {useEffect, useState} from 'react'
import StudentCard from './StudentCard'

function Roster({ students }) {

   // const { students } = sections
   // console.log("students",students)

   // const [students, setStudents] = useState([])

   // useEffect(() => {
   //    fetch(`sections/${cardClickId}/students`)
   //    .then(res => res.json())
   //    .then(data => setStudents(data))
   // }, [cardClickId])

   // const studentsArr = []
   // const section_students = sections
   // section_students.forEach((section) => {
   //    studentsArr.push(section.students)
   //    console.log("section students",section.students)
   // })
   // console.log("student array",studentsArr)

   // const sectionClicked = sections.filter((section) => { 
   //    return section.id === cardClickId
   // })

   // console.log(sectionClicked)
   // console.log(cardClickId)

   const classRoster = students.map(student => (
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
         {classRoster}
      </div>
   )
}

export default Roster