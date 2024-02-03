import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { selectUser} from '../features/userSlice'
import happylove1 from '../assets/happylove1.gif'
import happylove2 from '../assets/happylove2.gif'
import happylove3 from '../assets/happylove3.gif'
import happylove4 from '../assets/happylove4.gif'
import happy from '../assets/happylove4.gif'
import salove1 from '../assets/salove1.gif'
import sad1 from '../assets/sad1.gif'
import sad2 from '../assets/sad2.jpeg'
import sad3 from '../assets/sad3.gif'
import sad4 from '../assets/sad4.gif'
import sad5 from '../assets/sad5.gif'
import './val.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function Val() {
    
    let count=0
    const navigate = useNavigate()
    const username=useSelector(selectUser)
    const sads=[salove1,sad1,sad2,sad3,sad4,sad5]
    const happys=[happylove1,happylove2,happylove3,happylove4]
    const[pressedYes,setpressYes]=useState(false)
    const[pressedNo,setpressNo]=useState(false)
    let image=pressedNo?sads[count]:happys[count]


    function clicked(e){
        setpressNo(false)
        toast.success(`thank you for accepting my love ${username}!`)
        navigate('/out')

    }

    function clickedNo(e){
        setpressNo(true)
        count=Math.floor(Math.random()*4)
        toast.error(`you have to say yes ${username}!`)
    }


  return (
    <div className='val-page'>
      <div className='val-container'>
        <div className='image'>
            <img src={image} alt=""/>
        </div>
       <p>will you be my valentines <span>{username}</span> ? </p>
       <div className='buttons'>
            <button onClick={(e)=>clicked(e)}
           >yes</button>
            <button onClick={(e)=>clickedNo(e)}>no!</button>
        </div>
      </div>
    </div>
  )
}

export default Val
