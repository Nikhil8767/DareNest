import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();


    const handleRegister=async(e)=>{
        e.preventDefault();
        setError("");


        if(!name || !email || ! password){
            setError("all fields are required");
            return;
        }

        try {
            const API_BASE = import.meta.env.VITE_API_BASE_URL;

            const res=await fetch(`${API_BASE}/api/auth/register`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,email,password}),
            });

            const data=await res.json();

            if(!res.ok){
                setError(data.message || "Registration failed");
                return;
            }

            navigate("/login");
        } catch (error) {
            setError("server error");
        }
    }





    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
            <form onSubmit={handleRegister}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
                {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input type="text" placeholder="Full name" className="w-full border p-2 rounded mb-4" onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder="enter email" className="w-full border p-2 rounded mb-4" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" className="w-full border p-2 rounded mb-6" onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Register</button>


        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold">
            Login
          </Link>
        </p>
            </form>
        </div>
    )
}

export default Register;