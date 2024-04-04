import React from 'react'
import { useState } from 'react'



export default function Register() {

    const [data,setData] = useState({
        name:'',
        email:'',
        password :''
    })

    const registerUser= (e)=>{
        e.preventDefualt()
    }



  return (
    <div>
        <form onSubmit = {registerUser}>
            <label>Name</label>
            <input type = "text" placeholder = "Enter your name" value ={data.name} onChange={(e)=> setData({...data, name : e.target.value})}></input>
            <label>Email</label>
            <input type= "email" placeholder = "Enter your email" value = {data.email} onChange={(e)=> setData({...data,email:e.target.value})}></input>
            <label>Password</label>
            <input type = "password" placeholder = "Enter your password" value = {data.password} onChange = {(e)=> setData({...data,password:e.target.value})}></input>
            <button type= "submit">Submit</button>
        </form>
    </div>
  )
}
