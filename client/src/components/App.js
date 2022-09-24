import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import TeacherDashboard from "./TeacherPage";
import NewStudentForm from "./NewStudentForm";
import Assignments from "./Assignments";

function App() {

  const [isTeacher, setIsTeacher] = useState(true)
  const [currentUser, setCurrentUser] = useState("")
  const [teacherSections, setTeacherSections] = useState([])
  const [errors, setErrors] = useState(false)

  function updateUser(user) {
    setCurrentUser(user)
  }

  useEffect(() => {
    fetchTeacherSections()
    fetchUser()
  }, [])

  function fetchTeacherSections() {
    fetch('sections')
    .then(res => res.json())
    .then(data => setTeacherSections(data))
  }

  function fetchUser() {
    const endpoint = isTeacher ? 'teacher' : 'student'
    fetch(endpoint)
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  if(errors) return <h1>{errors}</h1>

  return (
    <Router>
        <NavBar currentUser={currentUser} updateUser={updateUser}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup updateUser={updateUser}/>} />
          <Route path="/login" element={<Login updateUser={updateUser} isTeacher={isTeacher} setIsTeacher={setIsTeacher}/>} />
          <Route path="/teachers/:id" element={<TeacherDashboard teacherInfo={teacherSections} />} />
          <Route path="/students/new" element={<NewStudentForm />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
    </Router>
  );
}

export default App;
