import React from 'react'
import { useState } from 'react';

function RegisterPage() {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();
            const response = await fetch ('https://api-service-afvl.onrender.com/register', {
            method: 'POST',
             body: JSON.stringify({username, password, fullname}),
            headers: {'Content-Type':'application/json'},
        });
       if (response.status === 200){
        alert("Registration Successful!..");
       }else {
        alert("Registration Failed!..")
       }
    }

  return (
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input 
            type="text" 
            placeholder="fullname" value={fullname} 
            onChange={ev => setFullname(ev.target.value)} 
        />

        <input 
            type="text" 
            placeholder="username" value={username} 
            onChange={ev => setUsername(ev.target.value)} 
        />

        <input 
            type="password" 
            placeholder="password"
            value={password} 
            onChange={ev => setPassword(ev.target.value)} 
        />

        <button>Register</button>
    </form>
  )
}

export default RegisterPage
