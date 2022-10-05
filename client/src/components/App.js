import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signup from "./teacher-stuff/Signup";
import Login from "./teacher-stuff/Login";
import TeacherDashboard from "./teacher-stuff/TeacherDashboard";
import Account from "./teacher-stuff/Account";
import Roster from "./teacher-stuff/Roster";
import SectionAssignments from "./teacher-stuff/SectionAssignments";
import StudentDashboard from "./student-stuff/StudentDashboard";
import Assignments from "./student-stuff/Assignments";
import EditStudentInfo from "./student-stuff/EditStudentInfo";
import StudentSignUp from "./student-stuff/StudentSignUp"
import StudentLogin from "./student-stuff/StudentLogin"

function App() {

	// const [isTeacher, setIsTeacher] = useState(
	// 	localStorage.getItem('is-teacher') === 'true',
	// )
	const [currentUser, setCurrentUser] = useState(null)

	// const isTeacher = localStorage.getItem('is-teacher')
	// localStorage.setItem('is-teacher', true)

	// function setIsTeacher(bool) {
	// 	localStorage.setItem('is-teacher', bool)
	// 	console.log(isTeacher)
	// }

	const params = useParams()
   const section_id = parseInt(params.section_id)

	// useEffect(() => {
	// 	localStorage.setItem('is-teacher', isTeacher)
	// }, [isTeacher])

	function handleLogOut() {
      fetch('/logout', {
        method: "DELETE"
      })
      setCurrentUser(null)
   };

	return (
		<div>
		<NavBar currentUser={currentUser} handleLogOut={handleLogOut} />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path="/teacher" element={<TeacherDashboard />}/>
			<Route path="/student" element={<StudentDashboard />}/>
			<Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
			<Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
			<Route path="/teacher" element={<TeacherDashboard currentUser={currentUser} />} />
			<Route path="/assignments/:section_id" element={<SectionAssignments section_id={section_id}/>} />
			<Route path="/roster/:section_id" element={<Roster />} />
			<Route path="/student-signup" element={<StudentSignUp setCurrentUser={setCurrentUser} />} />
			<Route path="/student-login" element={<StudentLogin setCurrentUser={setCurrentUser} />} />
			<Route path="/account" element={<Account currentUser={currentUser} />} />
			<Route path="/student" element={<StudentDashboard currentUser={currentUser}/>} />
			<Route path="/assignments" element={<Assignments currentUser={currentUser} />} />
			<Route path="/edit-info" element={<EditStudentInfo currentUser={currentUser} />} />
		</Routes>
	</div>
	)

	// if (currentUser === null) return (
	// 	<div>
	// 		<NavBar currentUser={currentUser} handleLogOut={handleLogOut} />
	// 		<Routes>
	// 			<Route path="/" element={<Home />}/>
	// 			<Route path="signup" element={<Signup setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>} />
	// 			<Route path="login" element={<Login setCurrentUser={setCurrentUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher} />} />
	// 		</Routes>
	// 	</div>
	// )

	// else if ("find_students" in currentUser) return (
	// 	<div>
	// 		<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
	// 		<Routes>
	// 			<Route path="/" element={<TeacherDashboard currentUser={currentUser} />} />
	// 			<Route path="account" element={<Account currentUser={currentUser} />} />
	// 			<Route path="assignments/:section_id" element={<SectionAssignments isTeacher={isTeacher} currentUser={currentUser}/>} />
	// 			<Route path="roster/:section_id" element={<Roster />} />
	// 		</Routes>
	// 	</div>
	// );

	// else if ("last_name" in currentUser) return (
	// 	<div>
	// 		<NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
	// 		<Routes>
	// 			<Route path="/" element={<StudentDashboard currentUser={currentUser}/>} />
	// 			<Route path="assignments" element={<Assignments isTeacher={isTeacher} currentUser={currentUser} />} />
	// 			<Route path="edit-info" element={<EditStudentInfo currentUser={currentUser} />} />
	// 		</Routes>
	// 	</div>
	// )
}

export default App;
