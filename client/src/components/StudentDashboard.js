import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'

function StudentDashboard({ currentUser }) {

	const [studentSections, setStudentSections] = useState([])

	useEffect(() => {
		fetch(`students/${currentUser.id}/sections`)
		.then(res => res.json())
		.then(data => setStudentSections(data))
	}, [currentUser.id])

	const schedule = studentSections.map(period => (
		<ClassCard 
		key = {period.id}
		id = {period.id}
		period = {period.period}
		subject = {period.subject}
	/>
	))

	return (
		<div className="flex flex-wrap justify-center">
			{schedule}
		</div>
	)
}

export default StudentDashboard