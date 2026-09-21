import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/Usercontext'

function Login() {
    const [username,setusername]=useState('')
    const[password,setpassword]=useState('')


    const {setUser}=useContext(UserContext)
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})


    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder='username' />
        {"   "}
        <input 
        type="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />
        <button
        onClick={handlesubmit}>
         submit
        </button>
    </div>
  )
}

export default Login