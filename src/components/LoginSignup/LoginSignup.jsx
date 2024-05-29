import React, { useState } from 'react'
import "./LoginSignup.css"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';


const LoginSignup = ({ setUserLogin }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userLogin', JSON.stringify(formData));
        setUserLogin(formData)
        navigate("/TodoApp")
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <form className='inputs' onSubmit={handleSubmit}>
                <div className="input">
                    <MdEmail className="LoginSignup-icon" />
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="input">
                    <RiLockPasswordFill className="LoginSignup-icon" />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <div className="submit-container">
                    <button className="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignup