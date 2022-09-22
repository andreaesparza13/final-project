import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";

function App() {

  const [currentUser, setCurrentUser] = useState("")

  function updateUser(user) {
    setCurrentUser(user)
  }

  useEffect(() => {
    fetchTeachers()
  }, [])

  function fetchTeachers() {
    fetch('teachers')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <Router>
        <NavBar currentUser={currentUser} updateUser={updateUser}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login updateUser={updateUser}/>} />
          <Route path="/me" element={<Login updateUser={updateUser}/>} />
        </Routes>
    </Router>
  );
}

export default App;
