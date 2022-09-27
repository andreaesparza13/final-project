import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Hello from "./Hello";
import TeacherDashboard from "./TeacherPage";
import NewStudentForm from "./NewStudentForm";
import Assignments from "./Assignments";

function App() {

  const [isTeacher, setIsTeacher] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [teacherSections, setTeacherSections] = useState([])

  useEffect(() => {
    fetchUser()
    fetchTeacherSections()
  }, [])

  function fetchTeacherSections() {
    fetch('sections')
    .then(res => res.json())
    .then(data => {
      setTeacherSections(data)
    })
  }

  function fetchUser() {
    // const endpoint = isTeacher ? 'teacher' : 'student'
    fetch('teacher')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  }

  if (!currentUser) return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
          <Route path="/" element={<Hello setIsTeacher={setIsTeacher} isTeacher={isTeacher} currentUser={currentUser} />}/>
          <Route path="/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} isTeacher={isTeacher}/>} />
          <Route path="/login" element={<Login onLogin={setCurrentUser} isTeacher={isTeacher} />} />
        </Routes>
    </div>
  )

  return (
    <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/" element={<TeacherDashboard setIsTeacher={setIsTeacher} isTeacher={isTeacher} currentUser={currentUser} teacherSections={teacherSections} />}/>
          <Route path="/new-student-form" element={<NewStudentForm />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
    </div>
  );
}

export default App;
