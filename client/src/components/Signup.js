import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({ updateUser }) {

   const [formData, setFormData] = useState({
      name: '',
      username: '',
      password: ''
   })
   const [errors, setErrors] = useState([])
   const navigate = useNavigate()

   const {name, username, password} = formData

   function onSubmit(e) {
      e.preventDefault();
      const teacher = {
         name,
         username, 
         password
      }
      fetch(`teachers`, {
         method:'POST',
         headers:{'Content-Type': 'application/json'},
         body:JSON.stringify(teacher)
       })
       .then(res => {
           if (res.ok) {
               res.json().then(teacher => {
                  updateUser(teacher)
                  navigate(`/teachers/${teacher.id}`)
               })
           } else {
               res.json().then(json => setErrors(Object.entries(json.errors)))
           }
       })  
   }

   function handleChange(e) {
      const {name, value} = e.target
      setFormData({...formData, [name]: value})
   }

   return (
      <>
         <form className="p-4 m-5" onSubmit={onSubmit}>
            <div className="mb-4">
               <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div className="mb-4">
               <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange}  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <div className="mb-4">
               <input type="text" placeholder="Password" name="password" value={password} onChange={handleChange}  className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Sign Up</button>
         </form>
         {errors ? errors.map(error => <div> {error[0]} {error[1]} </div>) : null}
      </>
   )
}

export default Signup