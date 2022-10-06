import React, { useEffect, useState } from 'react'
import StudentClassCard from './StudentClassCard'

function StudentDashboard({ currentUser }) {

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
		<div className="bg-subtle min-h-screen w-full bg-center m-0">
		<div className="flex flex-wrap justify-center">
			{schedule}
		</div>
		</div>
	)
}

export default StudentDashboard