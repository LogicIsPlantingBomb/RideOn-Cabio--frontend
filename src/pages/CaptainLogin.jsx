import {React,useState} from "react"
import logo from "./images/RideOnCabio-removebg-preview.png"
import {Link} from "react-router-dom"
const CaptainLogin = ()=>{
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const submitHandler = (e)=>{
		e.preventDefault();
		setCaptainData({email,password});
		console.log(captainData);
		setEmail("");
		setPassword("");
	}
	const [captainData,setCaptainData] = useState({});

	return (
			<div className="p-7 h-screen flex flex-col justify-between">
			<div>
			<img className="w-32 mb-10" src={logo} alt="notloaded" />
			<form onSubmit={(e)=>{
				submitHandler(e);
			}}>
				<h3 className="text-xl mb-2" >What's your email</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
					value={email}
					onChange={(e)=>{
						setEmail(e.target.value);
					}}
					required
					type="email"
					placeholder="email@example.com"
				/>

				<h3 className="text-xl mb-2" >Enter the Password</h3>
				<input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
					value={password}
					onChange={(e)=>{
						setPassword(e.target.value);
					}}
					required
					type="password"
					placeholder="password"
				/>

				<button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">Login</button>

			</form>
			<p className="text-center">Register as a Captain?</p><Link className="text-blue-600" to="/captain-register">Create new Account</Link>
			</div>
			<div>
				<Link className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" to="/users-login">Sign in as User</Link>
			</div>

		</div>

	)
}

export default CaptainLogin;
