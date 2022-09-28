import React from 'react'
import ClassCard from './ClassCard'

function TeacherDashboard({ teacherSections, teacherInfo, setTeacherInfo }) {
	// console.log(teacherSections)

	const classes = teacherSections.map(section => (
		<ClassCard 
			id = {section.id}
			key = {section.id}
			period = {section.period}
			subject = {section.subject}
			teacherInfo = {teacherInfo}
			students = {section.students}
			setTeacherInfo = {setTeacherInfo}
		/>
	))

	return (
		<div className="flex flex-wrap justify-center">
			{classes}
		</div>
	)
}

export default TeacherDashboard