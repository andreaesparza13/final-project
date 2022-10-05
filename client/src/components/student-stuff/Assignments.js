import React, { useEffect, useState } from 'react'
import AssignmentCard from './AssignmentCard'

function Assignments({ isTeacher, currentUser }) {

	const [assignments, setAssignments] = useState([])

	useEffect(() => {
		if (!isTeacher) {
			fetch(`students/${currentUser.id}/assignments`)
			.then(res => res.json())
			.then(data => setAssignments(data))
		} 
	}, [isTeacher, currentUser])

	const studentAssignments = assignments.map(assignment => (
			<AssignmentCard 
				title = {assignment.title}
				due_date = {assignment.due_date}
				period = {assignment.section.period}
				subject = {assignment.section.subject}
				key = {assignment.id}
			/>
	))

	return (
			<div className="flex flex-wrap justify-center">
				{studentAssignments}
			</div>
	)
}

export default Assignments