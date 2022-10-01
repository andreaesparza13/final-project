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
				<Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>} />
				<Route path="/login" element={<Login setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher} />} />
			</Routes>
		</div>
	)

	else if ("find_students" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
			<Routes>
				<Route path="/" element={<TeacherDashboard currentUser={currentUser} />}>
					<Route path="roster" >
						<Route path=":section_id" element={<Roster />} />
					</Route>
				</Route>
				<Route path="/new-student-form" element={<NewStudentForm />} />
				<Route path="/account" element={<Account currentUser={currentUser} />} />
				<Route path="/assignments" element={<Assignments isTeacher={isTeacher} currentUser={currentUser}/>} />
			</Routes>
		</div>
	);

	else if ("last_name" in currentUser) return (
		<div>
			<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
			<Routes>
				<Route path='/' element={<StudentDashboard />} />
				<Route path="assignments" element={<Assignments isTeacher={isTeacher} currentUser={currentUser} />} />
				<Route path="account" element={<Account currentUser={currentUser} />} />
			</Routes>
		</div>
	)
}

export default App;
