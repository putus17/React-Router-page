import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup ({ onLogin}) {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
    if (fullname && username && password) {
        localStorage.setItem('username', username)
        onLogin()
        navigate('/dashboard')
       }
    }

  return (
    <main>
            <h1>Sign Up</h1>
            <div className='card'>
                <form onSubmit={handleSubmit}>
                    <div style={{marginBottom: '1rem'}}>
                        <input
                        type='text'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder='Full Name'
                        required
                    />
                   </div>
                   <div style={{marginBottom: '1rem'}}>
                        <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                        required
                    />
                     </div>
                   <div style={{marginBottom: '1rem'}}>
                        <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                     </div>
                    <button type='submit'>Sign Up</button>
                </form>
                </div>
                </main>
    )
}