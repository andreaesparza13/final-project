import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar({ currentUser, updateUser }) {
   const [menu, setMenu] = useState(false)
   const navigate = useNavigate()

   const handleLogOut = () => {
      fetch('logout',{
        method: "DELETE"
      })
      updateUser("")
      navigate('/login') // redirect user to home page after logging out 
   };

   return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
               <NavLink to='/' className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
               Home
               </NavLink>
               <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
               <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
               </button>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
               <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                     <NavLink to='/signup' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Sign Up
                     </NavLink>
                  </li>
                  <li>
                     {currentUser ? <NavLink to='/login' onClick={handleLogOut} className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">Log Out</NavLink> : <NavLink to='/login' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">Log In</NavLink>}
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default NavBar