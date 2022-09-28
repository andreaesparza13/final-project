import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import TeacherDashboard from "./TeacherDashboard";
import NewStudentForm from "./NewStudentForm";
import Assignments from "./Assignments";
import Account from "./Account";
import Roster from "./Roster";
import StudentDashboard from "./StudentDashboard";

function App() {

	const [isTeacher, setIsTeacher] = useState(true)
	const [currentUser, setCurrentUser] = useState(null)
	const [teacherSections, setTeacherSections] = useState([])
	const [roster, setRoster] = useState([])

	useEffect(() => {
		fetchUser()
		fetchTeacherSections()
		fetchRoster()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	function fetchTeacherSections() {
		fetch('sections')
		.then(res => res.json())
		.then(data => setTeacherSections(data))
	}

	function fetchRoster() {
		fetch('/sections/:id/students')
		.then(res => res.json())
		.then(data => setRoster(data))
	}

	function fetchUser() {
		const endpoint = isTeacher ? 'teacher' : 'student'
		fetch(endpoint)
		.then(res => {
			if(res.ok) {
				res.json().then(user => {
					setCurrentUser(user)
				})
			}
		})
	}

	if (currentUser === null) return (
		<div>
			<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>} />
				<Route path="/login" element={<Login onLogin={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher} />} />
			</Routes>
		</div>
	)

	else if ("find_students" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
			<Routes>
				<Route path="/" element={<TeacherDashboard setIsTeacher={setIsTeacher} isTeacher={isTeacher} currentUser={currentUser} teacherSections={teacherSections} />} />
				<Route path="/new-student-form" element={<NewStudentForm />} />
				<Route path="/assignments" element={<Assignments teacherSections={teacherSections} />} />
				<Route path="/account" element={<Account currentUser={currentUser} />} />
				<Route path="/roster" element={<Roster roster={roster} currentUser={currentUser} />} />
			</Routes>
		</div>
	);

	else if ("last_name" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
			<Routes>
			<Route path='/' element={<StudentDashboard />} />
			<Route path="/assignments" element={<Assignments />} />
			<Route path="/account" element={<Account currentUser={currentUser} />} />
			</Routes>
		</div>
	)
}

export default App;
