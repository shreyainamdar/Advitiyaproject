//import React from 'react'
import { useState } from 'react'
//import Button from './Button.js'

const Frontend=() => {

    const [Name,setName]=useState('')
  const [usn,setusn]=useState('')
  const [email,setemail]=useState('')
  const [college,setcollege]=useState('')
  const [branch,setbranch]=useState('')
  const [region,setregion]=useState('')
  const [sem,setsem]=useState('')
   
   


    return (
        <form className="add-reg">
        <div className='form-control'>
        <label >Region</label>
        <input type='text' placeholder='Type region' value={region}
         onChange={(e) =>setregion(e.target.value)} ></input>
    </div>
    <div className='form-control'>
        <label >Name</label>
        <input type='text' placeholder='Type your name' value={Name}
         onChange={(e) =>setName(e.target.value)} ></input>
    </div>


    <div className="form-control">
        <label>USN</label>
        <input type='text' placeholder='Enter USN' value={usn} 
        onChange={(e) =>setusn(e.target.value)}></input>
    </div>

    <div className="form-control">
        <label>Email</label>
        <input type='text' placeholder='Enter email id' value={email} 
        onChange={(e) =>setemail(e.target.value)}></input>
    </div>
    <div className="form-control">
        <label>College</label>
        <input type='text' placeholder='Enter college name' value={college} 
        onChange={(e) =>setcollege(e.target.value)}></input>
    </div>

    <div className="form-control">
        <label>Branch</label>
        <input type='text' placeholder='Enter branch' value={branch} 
        onChange={(e) =>setbranch(e.target.value)}></input>
    </div>

    <div className='form-control'>
        <label >SEM</label>
        <input type='text' placeholder='enter sem' value={sem}
         onChange={(e) =>setsem(e.target.value)} ></input>
    </div>
 <button >register</button>
 <button>cancel</button>
    

    </form>
    );
}

export default Frontend
