import {React,useState} from "react"
import logo from "./images/RideOnCabio-removebg-preview.png"
import {Link} from "react-router-dom"
const CaptainSignup = ()=>{
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [firstName,setFirstName] = useState('');
	const [lastName,setLastName] = useState('');
	const submitHandler = (e)=>{
		e.preventDefault();
		setCaptainData({
			username:{
				firstName:firstName,
				lastName:lastName
			},
			email:email,
			password:password
		});
		console.log(captainData);
		setEmail("");
		setPassword("");
		setFirstName("");
		setLastName("");
	}
	const [captainData,setCaptainData] = useState({});

	return (
			<div className="p-7 h-screen flex flex-col justify-between">
			<div>
			<img className="w-32 mb-10" src={logo} alt="notloaded" />
			<form onSubmit={(e)=>{
				submitHandler(e);
			}}>
				<h3 className="text-xl mb-2" >What is your name?</h3>
				<div className="flex gap-4">
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
					required
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e)=>{
						setFirstName(e.target.value);
					}}
				/>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base "
					required
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e)=>{
						setLastName(e.target.value);
					}}
				/>
				</div>
				<h3 className="text-xl mb-2" >What's your email</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
					required
					type="email"
					placeholder="email@example.com"
					value={email}
					onChange={(e)=>{
						setEmail(e.target.value);
					}}
				/>

				<h3 className="text-xl mb-2" >Enter the Password</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
					required
					type="password"
					placeholder="password"
					value={password}
					onChange={(e)=>{
						setPassword(e.target.value);
					}}
				/>

				<button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Register</button>

			</form>
			<div className="text-center">
			<p >Already have an account?</p><Link className="text-blue-600" to="/captain-login">Login as Captain</Link>
			</div>
			</div>
			<div>
				<p className="text-center text-[10px] leading-tight  ">© 2025 RideOn-Cabio. All rights reserved.By using this app, you agree to our Terms of Service and Privacy Policy.
				</p>
			</div>

		</div>

	)
}

export default CaptainSignup;
