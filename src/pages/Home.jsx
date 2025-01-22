import React from "react";
import logo from "./images/RideOnCabio-removebg-preview.png";
import trafficLight from "./images/trafficlight.png";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div
        className="h-screen w-full flex justify-between flex-col"
        style={{
          backgroundImage: `url(${trafficLight})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
	  backgroundPosition:"center"
        }}
      >
        <img className="w-32 ml-6" src={logo} alt="not loaded" />
        <div className="bg-white py-5 px-5">
          <h2 className="text-2xl font-bold">Get Started with RideOn Cabio</h2>
          <Link to="/users-login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

