import React, { useEffect, useState } from 'react'
import StudentClassCard from './StudentClassCard'

function StudentDashboard({ currentUser }) {
	console.log(currentUser)

	const [studentSections, setStudentSections] = useState([])

	useEffect(() => {
		fetch(`students/${currentUser.id}/sections`)
		.then(res => res.json())
		.then(data => setStudentSections(data))
	}, [currentUser.id])

	const schedule = studentSections.map(period => (
		<StudentClassCard 
		key = {period.id}
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