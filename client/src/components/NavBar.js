import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ currentUser, handleLogOut }) {

   if (currentUser === null) return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-0 dark:bg-gray-800">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
               <NavLink to='/' className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
               Home
               </NavLink>
               {/* <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li>
                     <NavLink to='/signup' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Sign Up
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='/login' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Log In
                     </NavLink>
                  </li>
               </ul> */}
            </div>
         </div>
      </nav>
   )

   else if ("find_students" in currentUser) return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-0 dark:bg-gray-800">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
               <NavLink to='/' className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
               Dashboard
               </NavLink>
               <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
               <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
               </button>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
               <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                     <NavLink to='/account' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Account
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='/' onClick={handleLogOut} className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Log Out
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )

   else if ("last_name" in currentUser) return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-0 dark:bg-gray-800">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
               <NavLink to='/' className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
               Dashboard
               </NavLink>
               <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
               <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
               </button>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
               <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                     <NavLink to='/edit-info' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Edit Info
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/assignments' className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Assignments
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='/' onClick={handleLogOut} className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                     Log Out
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default NavBar