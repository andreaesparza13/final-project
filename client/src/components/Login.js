import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ updateUser }) {

   const [errors, setErrors] = useState([])
   const navigate = useNavigate()

   const [formData, setFormData] = useState({
      username: '',
      password: ''
   })
   const {username, password} = formData

   function onSubmit(e) {
      e.preventDefault()
      const user = {
         username,
         password
      }
      fetch('/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(user)
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

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   return (
   <div>
      <form onSubmit={onSubmit} className="p-4 m-5">
         <div className="mb-4">
            <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <div className="mb-4">
            <input type="text" placeholder="Password" name="password" value={password} onChange={handleChange} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Log In</button>
      </form>
      {errors ? <div>{errors}</div> : null}
   </div>
  )
}

export default Login