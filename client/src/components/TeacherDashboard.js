import React from 'react'
import ClassCard from './ClassCard'

function TeacherDashboard({ teacherSections }) {

	const classes = teacherSections.map(section => (
		<ClassCard 
			id = {section.id}
			key = {section.id}
			period = {section.period}
			subject = {section.subject}
		/>
	))

	return (
		<div className="flex flex-wrap justify-center">
			{classes}
		</div>
	)
}

export default TeacherDashboard