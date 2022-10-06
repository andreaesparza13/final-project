import React, { useState } from 'react'

function EditStudentInfo({ currentUser }) {

	const [first_name, setFirstName] = useState(`${currentUser.first_name}`)
	const [last_name, setLastName] = useState(`${currentUser.last_name}`)
	const [pronouns, setPronouns] = useState(`${currentUser.pronouns}`)
	const [preferred_name, setPreferredName] = useState(`${currentUser.preferred_name}`)
	const [private_pronouns, setPrivatePronouns] = useState(`${currentUser.private_pronouns}`)
	const [extra_info, setExtraInfo] = useState(`${currentUser.extra_info}`)
	
	function submitEditInfo (e) {
		e.preventDefault()
		fetch(`students/${currentUser.id}`, {
			method: 'PATCH',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ first_name, last_name, preferred_name, private_pronouns, pronouns, extra_info })
		})
		.then(res => {
			if (res.ok) {
				res.json()
				setFirstName(`${first_name}`)
				setLastName(`${last_name}`)
				setPronouns(`${pronouns}`)
				setPrivatePronouns(`${private_pronouns}`)
				setPreferredName(`${preferred_name}`)
				setExtraInfo(`${extra_info}`)
				alert("Your information has been updated.")
				window.location.reload()
			}
		})
	}

	return (
		<div className="bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/light-grey-terrazzo.png')] min-h-screen w-full bg-center m-0">
         <br/>
		<form onSubmit={submitEditInfo} className="m-2 flex flex-col justify-center items-center ml-auto mr-auto w-96 border-4 bg-white">
			<h1 className="p-4 text-xl font-extrabold text-slate-700">Update Personal Information</h1>
			<div className="mb-4 w-72">
				<input 
					type="text" 
					placeholder="First Name" 
					name="first-name" 
					value={first_name} 
					onChange={e => setFirstName(e.target.value)} 
					className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				/>
			</div>
			<div className="mb-4 w-72">
				<input 
					type="text" 
					placeholder="Last Name" 
					name="last-name" 
					value={last_name} 
					onChange={e => setLastName(e.target.value)} 
					className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
					/>
			</div>
			<div className="mb-4 w-72">
				<input 
					type="text" 
					placeholder="Preferred Name or Nickname" 
					name="preferred-name" 
					value={preferred_name} 
					onChange={e => setPreferredName(e.target.value)} 
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
			<div className="mb-4 w-72">
				<label className="text-slate-500 font-bold">
					<input 
						className="mr-2 leading-tight" 
						type="checkbox" name="private-pronouns" 
						value={private_pronouns} 
						onChange={e => setPrivatePronouns(e.target.value)}
					/>
					<span className="text-sm">
						Keep pronouns private?
					</span>
				</label>
			</div>
			<div className="mb-4 w-72">
				<textarea 
					type="text" 
					placeholder="Anything else you need or want your teachers to know about you" 
					name="extra-info" 
					value={extra_info} 
					onChange={e => setExtraInfo(e.target.value)} 
					className="px-3 py-3 form-control block transition ease-in-out placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
					rows="3"
				/>
			</div>
			<button className="text-slate-500 border border-slate-500 hover:bg-slate-500 hover:text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150" type="submit">
				Update
			</button>
		</form>
		</div>
  )
}

export default EditStudentInfo