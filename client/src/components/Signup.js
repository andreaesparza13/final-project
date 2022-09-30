import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({ isTeacher, setIsTeacher, setCurrentUser }) {

   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [name, setName] = useState('')
   const [pronouns, setPronouns] = useState('')
   const [errors, setErrors] = useState([])
   const navigate = useNavigate()

   function onSubmit(e) {
      e.preventDefault();
      const endpoint = isTeacher ? 'new_teacher' : 'new_student'
      fetch(endpoint, {
         method:'POST',
         headers:{'Content-Type': 'application/json'},
         body:JSON.stringify({ name, username, password })
       })
       .then(res => {
           if (res.ok) {
               res.json().then(user => {
                  setCurrentUser(user)
                  navigate(`/`)
               })
           } else {
               res.json().then(json => setErrors(Object.entries(json.errors)))
           }
       })  
   }

   return (
      <div>
         <h1 className="ml-5 p-4 text-3xl font-extrabold text-slate-700">
            {isTeacher ? "Teacher" : "Student"} Signup
         </h1>
         <div className="ml-9 mt-6">
            <button type="button"className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" onClick={() => setIsTeacher(true)}>
               Teacher
            </button>
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setIsTeacher(false)}>
               Student
            </button>
         </div>
         <form className="p-4 ml-5 mt-1" onSubmit={onSubmit}>
            <div className="mb-4">
               <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
               />
            </div>
            <div className="mb-4">
               <input 
                  type="text" 
                     placeholder="Username" 
                     name="username" 
                     value={username} 
                     onChange={e => setUsername(e.target.value)} 
                     className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
            </div>
            <div className="mb-4">
               <input 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
                  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
               />
            </div>
            <div className="mb-4">
               <input 
                  type="text" 
                  placeholder="Pronouns" 
                  name="pronouns" 
                  value={pronouns} 
                  onChange={e => setPronouns(e.target.value)} 
                  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  />
            </div>
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
               Sign Up
            </button>
         </form>
         {errors ? errors.map(error => <div> {error[0]} {error[1]} </div>) : null}
      </div>
   )
}

export default Signup