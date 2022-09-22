import React from 'react'

function Signup() {

   const blankForm = {
      name: "",
      username: "",
      password: ""
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.value)
   }

   return (
      <div>
      <form className="p-4 m-5">
         <div className="mb-4">
            <input type="text" placeholder="Name" name="name" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <div className="mb-4">
            <input type="text" placeholder="Username" name="username" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <div className="mb-4">
            <input type="text" placeholder="Password" name="password" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
         </div>
         <button onClick={handleSubmit} className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Sign Up</button>
      </form>
      </div>
   )
}

export default Signup