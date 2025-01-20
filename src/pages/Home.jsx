import React from "react"
import logo from "./images/RideOnCabio-removebg-preview.png"
const Home = ()=>{
	return(
		<div>
			<div className="h-screen p-5 w-full bg-red-400 flex justify-between flex-col w-full" >
				<img className="w-16" src={logo} alt="not loaded" />
				<div className="bg-white">
					<h2>Get Started with RideOn Cabio</h2>
					<button>Continue</button>
				</div>
			</div>
		</div>
	)
}

export default Home;
