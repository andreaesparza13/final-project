import React from 'react'
import { NavLink } from 'react-router-dom'

function Home({ setIsTeacher, isTeacher, currentUser, teacherSections }) {

	console.log("Home", teacherSections)
	// const sectionsList = teacherSections.map(section => console.log(section))

  	if (!currentUser) return
		(
		<div>
			I am a...
			<NavLink to='/signup' className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setIsTeacher(isTeacher)}>
				Teacher
			</NavLink>
			<NavLink to='/signup' className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setIsTeacher(!isTeacher)}>
				Student
			</NavLink>
		</div>
		)

	return (
		<div>
			{teacherSections.map(section => console.log(section))}
		</div>
	)
}

export default Home