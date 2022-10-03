import React, { useState } from 'react'

function Account({ currentUser }) {

	const [name, setName] = useState(`${currentUser.name}`)
	const [pronouns, setPronouns] = useState(`${currentUser.pronouns}`)

	function editAccountInfo(e) {
		e.preventDefault()
		fetch(`teachers/${currentUser.id}`, {
			method: 'PATCH',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({name, pronouns})
		})
		.then(res => {
			if (res.ok) {
				res.json()
				setName(`${name}`)
				setPronouns(`${pronouns}`)
				alert("Your information has been updated.")
			}
		})
	}

	return (
		<form onSubmit={editAccountInfo} className="m-2 flex flex-col justify-center items-center ml-auto mr-auto w-96 border-4 bg-white">
			<h1 className="p-4 text-xl font-extrabold text-slate-700">Update Personal Information</h1>
			<div className="mb-4 w-72">
				<input 
					type="text" 
					placeholder="Name" 
					name="name" 
					value={name} 
					onChange={e => setName(e.target.value)} 
					className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				/>
			</div>
			<div className="mb-4 w-72">
				<input 
					type="text" 
					placeholder="Pronouns" 
					name="pronouns" 
					value={pronouns} 
					onChange={e => setPronouns(e.target.value)} 
					className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
					/>
			</div>
			<button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150" type="submit">
				Update
			</button>
		</form>
	)
}

export default Account