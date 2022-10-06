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
		<div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')] min-h-screen w-full bg-center m-0">
         <br/>
			<div className="flex flex-wrap justify-center">
				{studentAssignments}
			</div>
		</div>
	)
}

export default Assignments