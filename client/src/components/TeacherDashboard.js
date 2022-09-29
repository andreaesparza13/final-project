import React from 'react'
import ClassCard from './ClassCard'

function TeacherDashboard({ teacherSections, setCardClickId }) {

	const classes = teacherSections.map(section => (
		<ClassCard 
			key = {section.id}
			id = {section.id}
			period = {section.period}
			subject = {section.subject}
			students = {section.students}
			section = {section}
			setCardClickId = {setCardClickId}
		/>
	))

	return (
		<div className="flex flex-wrap justify-center">
			{classes}
		</div>
	)
}

export default TeacherDashboard