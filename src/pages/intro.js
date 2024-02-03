import React, { useState,useRef } from 'react'
import './intro.css'
import { toast } from 'react-toastify'
import peeping from '../assets/peeping1.gif'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
export default function  Intro() {
    const[username,setUsername]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const form = useRef();

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!username){
             toast.error('No pookie,your name!!!')
        }
        else{
            toast.success(`welcome ${username}`)
            dispatch(login({username:username}))
            emailjs.sendForm('service_edtnxoo', 'template_7rnnwjj', form.current, 'kqngMplhGlZa0HLim')
             .then((result) => {
                console.log(result.text);
                }, (error) => {
                console.log(error.text);
                })
            navigate('/val')

        }

    }
  return (
    <div  className='intro-page'>
        <div className='intro-container'>
            <div className='image'>
            <img src={peeping} alt='pookie'/>
            </div>
            <h2><span>Hi pookie </span>, what should I call you?</h2>
            <form ref={form}>
                <label htmlFor='name'>Your name</label>
                <input htm type='text' value={username}
                name='from_name'
                onChange={(e)=>setUsername(e.target.value)}
                 placeholder="Your name please"></input>

                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    </div>
  )
}
