import React, { useState, useEffect } from 'react'
import ClassCard from './ClassCard'

function TeacherDashboard({ currentUser }) {

	const [teacherSections, setTeacherSections] = useState([])
	const [showForm, setShowForm] = useState(false)
	const [period, setPeriod] = useState(0)
	const [subject, setSubject] = useState("")

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
			handleDeleteClass = {handleDeleteClass}
		/>
	))

	function handleDeleteClass(id) {
		setTeacherSections(current => current.filter(s => s.id !== id))
	}

	function toggleForm() {
		setShowForm(!showForm)
	}

	function handleSubmit(e) {
		e.preventDefault()
		fetch('sections', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ period, subject, teacher_id: currentUser.id })
		})
		.then(res => res.json())
		.then(data => {
			setTeacherSections([...teacherSections, data])
			setPeriod(0)
			setSubject("")
		})
	}

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{classes}
			</div>
			<div className="flex flex-wrap justify-center">
				<button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mr-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150" onClick={toggleForm}>
					Add New Class
				</button>
			</div>
			<div>
				{showForm ? 
				<form onSubmit={handleSubmit} className="m-2 flex flex-col justify-center items-center ml-auto mr-auto w-72 border-4 bg-white">
					<div className="mt-5 mb-4 w-64">
						<label className="block text-slate-700 text-sm font-bold mb-2" >
							Teacher ID: 
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={currentUser.id} disabled/>
						</label>
					</div>
					<div className="mb-4 w-64">
						<label className="block text-slate-700 text-sm font-bold mb-2" >
							Period: 
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={period} onChange={e => setPeriod(e.target.value)}/>
						</label>
					</div>
					<div className="mb-4 w-64">
						<label className="block text-slate-700 text-sm font-bold mb-2" >
							Subject: 
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={subject} onChange={e => setSubject(e.target.value)}/>
						</label>
					</div>
					<div>
						<button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 mb-5 rounded outline-none focus:outline-none ease-linear transition-all duration-150" type="submit">
							Submit
						</button>
					</div>
				</form> 
				: null}
			</div>
		</>
	)
}

export default TeacherDashboard