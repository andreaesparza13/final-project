import React, { useState, useEffect } from 'react'
import ClassCard from './ClassCard'

function TeacherDashboard() {

	const [teacherSections, setTeacherSections] = useState([])

	useEffect(() => {
		fetch(`sections`)
		.then(res => res.json())
		.then(data => setTeacherSections(data))
	}, [])

	const classes = teacherSections.map(section => (
		<ClassCard 
			key = {section.id}
			id = {section.id}
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