import React from 'react'
import './Adminlogin.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logincontext } from '../Contextapis/Contextapi';

function Adminlogin() {
    let {register,handleSubmit}=useForm()
    let [adminusernameerror,setadminusernameerror]=useState("")
    let [adminpassworderror,setadminpassworderror]=useState("")
    let [, , , , ,setadminlogin]=useContext(logincontext)
    let navigate=useNavigate()
    let submitform=(formdata)=>
    {
        axios.post('http://localhost:3500/admin-api/adminlogin',formdata)
        .then((dbres)=>
        {
          if(dbres.data.flag==1)
          {
            setadminusernameerror("*invalid username")
          }
          else if(dbres.data.flag==2)
          {
            setadminusernameerror("")
            setadminpassworderror("*password does not match")
          }
          else 
          {
            setadminpassworderror("")
            setadminusernameerror("")
            setadminlogin(formdata.username)
            navigate('/userpersonaldetails')
          }
        })
    }
  return (
    <div className='adminloginbody'>
    <div className="admincontainer">  
       <form autoComplete="off" onSubmit={handleSubmit(submitform)}>
          <div className="formcontrol">
            <div>
              <h3 className='adminloginheading mb-2'>Admin Login:</h3>
              <label htmlFor="useremail"><b>Username</b></label>
              <input type="text"  className="form-control" id="useremail" {...register("username")}/>
              {adminusernameerror&&<span className='text-danger'>{adminusernameerror}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="userpassword"><b>Password</b></label>
              <input type="password" className="form-control" id="userPassword4" {...register("password")}/>
              {adminpassworderror&&<span className='text-danger'>{adminpassworderror}</span>}
            </div>
           </div>
              <button type="submit" className="btn btn-danger my-2"  id="btn11">Login</button>
        </form>
     </div>
   </div>
  )
}

export default Adminlogin;
