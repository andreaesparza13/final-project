import React from 'react'

function StudentCard({ first_name, last_name, grade_level, preferred_name, pronouns, private_pronouns, extra_info, id }) {

   return (
      <div className="p-6 min-w-lg bg-slate-300 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-6 ml-auto mr-auto">
         <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {preferred_name ? preferred_name : first_name} {last_name}
         </h5>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >
            {private_pronouns ? null : pronouns}
         </p>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >ID Number: {id}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >Grade Level: {grade_level}</p>
         <p className="font-medium text-black mb-3 dark:text-gray-400" >Extra Info: <br/> {extra_info}</p>
      </div>
   )
}

export default StudentCard