import React, { useState, useContext } from "react";
import logo from "./images/RideOnCabio-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext"; // Corrected import

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { user, setUser } = useContext(UserDataContext); // Corrected context usage
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser, { headers: { "Content-Type": "application/json" } });
		
            if (response.status === 201) {
                setUser(response.data.user);
                navigate("/home");
            }
        } catch (error) {
            console.error("Error registering user:", error);
        }

        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-32 mb-10" src={logo} alt="Logo" />
                <form onSubmit={submitHandler}>
                    <h3 className="text-xl mb-2">What is your name?</h3>
                    <div className="flex gap-4">
                        <input
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                            required
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                            required
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <h3 className="text-xl mb-2">What's your email?</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h3 className="text-xl mb-2">Enter the Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        required
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
                        Register
                    </button>
                </form>

                <div className="text-center">
                    <p>Already have an account?</p>
                    <Link className="text-blue-600" to="/users-login">Login as User</Link>
                </div>
            </div>

            <div>
                <p className="text-center text-[10px] leading-tight">
                    © 2025 RideOn-Cabio. All rights reserved. By using this app, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default UserSignup;

