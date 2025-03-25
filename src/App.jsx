import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import  Home  from "./pages/Home"
import Start  from "./pages/Start"
import  UserLogin  from "./pages/UserLogin"
import  UserSignup  from "./pages/UserSignup"
import  CaptainLogin from "./pages/CaptainLogin"
import  CaptainSignup from "./pages/CaptainSignup"

function App() {

  return (
    <>
	  <Routes>
	  	<Route path="/" element={<Start />} />
	  	<Route path="/users-login" element={<UserLogin/>} />
	  	<Route path="/users-register" element={<UserSignup/>} />
	  	<Route path="/captain-login" element={<CaptainLogin/>} />
	  	<Route path="/captain-register" element={<CaptainSignup/>} />
	  	<Route path="/home" element={<Home />} />
	  </Routes>
    </>
  )
}

export default App;
