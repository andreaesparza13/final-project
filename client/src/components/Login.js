import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ updateUser, isTeacher, setIsTeacher }) {

   const [errors, setErrors] = useState([])
   const navigate = useNavigate()

   const [formData, setFormData] = useState({
      username: '',
      password: ''
   })
   const {username, password} = formData

   function onSubmit(e) {
      e.preventDefault()
      const endpoint = isTeacher ? '/login_teacher' : '/login_student'
      fetch(endpoint, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ username, password })
      })
      .then(res => {
         if (res.ok) {
            res.json().then(user => {
               updateUser(user)
               navigate(`/teachers/${user.id}`)
            })
         } else {
            res.json().then(json => setErrors(json.errors))
         }
      })
   }

   function handleChange(e) {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   return (
   <div>
      <form onSubmit={onSubmit} className="p-4 m-5">
         <div className="mb-4">
            <input type="text" placeholder="Enter Username" name="username" value={username} onChange={handleChange} className="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <div className="mb-4">
            <input type="text" placeholder="Enter Password" name="password" value={password} onChange={handleChange} className="px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <label>Teacher?</label>
         <input type="checkbox" onChange={setIsTeacher(!isTeacher)}/>
         <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Log In</button>
      </form>
      {errors ? <div>{errors}</div> : null}
   </div>
  )
}

export default Login