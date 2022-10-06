import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import TeacherDashboard from "./TeacherDashboard";
import Assignments from "./Assignments";
import Account from "./Account";
import Roster from "./Roster";
import StudentDashboard from "./StudentDashboard";
import EditStudentInfo from "./EditStudentInfo";
import SectionAssignments from "./SectionAssignments";

function App() {

	const [isTeacher, setIsTeacher] = useState(
		localStorage.getItem('is-teacher') === 'true',
	)
	const [currentUser, setCurrentUser] = useState(null)
		
	useEffect(() => {
		const endpoint = isTeacher ? 'teacher' : 'student'
		fetch(endpoint)
		.then(res => {
			if(res.ok) {
				res.json().then(user => {
					console.log(user)
					setCurrentUser(user)
				})
			}
		})
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		localStorage.setItem('is-teacher', isTeacher)
	}, [isTeacher])

	function handleLogOut() {
      fetch('/logout', {
        method: "DELETE"
      })
      setCurrentUser(null)
   };

	if (currentUser === null) return (
		<div>
			<NavBar currentUser={currentUser} handleLogOut={handleLogOut} />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="signup" element={<Signup setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>} />
				<Route path="login" element={<Login setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher} />} />
			</Routes>
		</div>
	)

	else if ("find_students" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
			<Routes>
				<Route path="/" element={<TeacherDashboard currentUser={currentUser} />} />
				<Route path="account" element={<Account currentUser={currentUser} />} />
				<Route path="assignments/:section_id" element={<SectionAssignments isTeacher={isTeacher} currentUser={currentUser}/>} />
				<Route path="roster/:section_id" element={<Roster />} />
			</Routes>
		</div>
	);

	else if ("last_name" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
			<Routes>
				<Route path="/" element={<StudentDashboard currentUser={currentUser}/>} />
				<Route path="assignments" element={<Assignments isTeacher={isTeacher} currentUser={currentUser} />} />
				<Route path="edit-info" element={<EditStudentInfo currentUser={currentUser} />} />
			</Routes>
		</div>
	)
}

export default App;
