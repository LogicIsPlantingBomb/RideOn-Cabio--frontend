import React from "react"
import logo from "./images/RideOnCabio-removebg-preview.png"
import {Link} from "react-router-dom"
const UserLogin = ()=>{
	return (
		<div className="p-7 h-screen flex flex-col justify-between">
			<div>
			<img className="w-32 mb-10" src={logo} alt="notloaded" />
			<form>
				<h3 className="text-xl mb-2" >What's your email</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
					required 
					type="email" 
					placeholder="email@example.com"
				/>
				
				<h3 className="text-xl mb-2" >Enter the Password</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
					required 
					type="password"
					placeholder="password" 
				/>
				
				<button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>
				
			</form>
			<p className="text-center">New here?</p><Link className="text-blue-600" to="/users-register">Create new Account</Link>
			</div>
			<div>
				<Link className="bg-lime-600 flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" to="/captain-register">Sign in as Captain</Link>
			</div>

		</div>
	)
}
export default UserLogin
