import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import TeacherPage from "./TeacherPage";
import NewStudentForm from "./NewStudentForm";
import Assignments from "./Assignments";

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [students, setStudents] = useState([])
  const [errors, setErrors] = useState(false)

  function updateUser(user) {
    setCurrentUser(user)
  }

  useEffect(() => {
    fetchTeachers()
  }, [])

  function fetchTeachers() {
    fetch('teachers')
    .then(res => {
      if(res.ok){
        res.json().then(setStudents)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  function addNewStudent(student) {
    setStudents(current => [...current, student])
  }

  if(errors) return <h1>{errors}</h1>

  return (
    <Router>
        <NavBar currentUser={currentUser} updateUser={updateUser}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup updateUser={updateUser}/>} />
          <Route path="/login" element={<Login updateUser={updateUser}/>} />
          <Route path="/teachers/:id" element={<TeacherPage students={students} />} />
          <Route path="/students/new" element={<NewStudentForm addNewStudent={addNewStudent}/>} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
    </Router>
  );
}

export default App;
