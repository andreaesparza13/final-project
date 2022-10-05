import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function StudentLogin({ setCurrentUser }) {
   const [errors, setErrors] = useState([])
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()

   useEffect(() => {
		// const endpoint = isTeacher ? 'teacher' : 'student'
		fetch('student')
		.then(res => {
			if(res.ok) {
				res.json().then(user => {
					console.log(user)
					setCurrentUser(user)
				})
			}
		})
	}, [setCurrentUser])

   function onSubmit(e) {
      e.preventDefault()
      // const endpoint = isTeacher ? 'login_teacher' : 'login_student'
      fetch('login_student', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username, password }),
      })
      .then(res => {
         if (res.ok) {
            res.json().then(user => {
               setCurrentUser(user)
               navigate('/student')
            })
         } else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
         }
      })
   }

   return (
   <div className="text-center">
      <form onSubmit={onSubmit} className="m-2 flex flex-col justify-center items-center ml-auto mr-auto w-96 border-4 bg-white">
         <h1 className="p-4 text-3xl font-extrabold text-slate-700">Student Login</h1>
         <div className="mt-2 mb-2">
            <NavLink type="button"className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" to="/login">
               Teacher
            </NavLink>
            <NavLink className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" type="button" to='/student-login'>
               Student
            </NavLink>
         </div>
         <div className="mb-4 w-72">
            <input 
               type="text" 
               placeholder="Enter Username" 
               name="username" 
               value={username} 
               onChange={e => setUsername(e.target.value)} 
               className="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
         </div>
         <div className="mb-4 w-72">
            <input 
               type="password" 
               placeholder="Enter Password" 
               name="password" 
               value={password} 
               onChange={e => setPassword(e.target.value)} 
               className="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
         </div>
         <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150" type="submit">
            Log In
         </button>
      </form>
      {errors ? errors.map(error => <div> {error[0]} {error[1]} </div>) : null}   
   </div>
  )
}

export default StudentLogin