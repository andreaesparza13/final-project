import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
   return (
      <div className='text-center'>
         <h1 className='ml-5 p-4 text-3xl font-extrabold text-slate-700'>Welcome!</h1>
         <div className="ml-9 mt-6">
            <NavLink to='/login' className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150">
               Log In
            </NavLink>
            <NavLink to='/signup' className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150">
               Sign Up
            </NavLink>
         </div>
      </div>
   )
}

export default Home