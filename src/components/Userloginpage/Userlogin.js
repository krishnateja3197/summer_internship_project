import React from 'react'
import './Userlogin.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { logincontext } from '../Contextapis/Contextapi';

function Userlogin() {
  let {register,handleSubmit}=useForm()
  let [ ,setuserloginstatus, ,setloginuser]=useContext(logincontext)
  let [usernameerror,setusernameerror]=useState("")
  let [passworderror,setpassworderror]=useState("")
  let navigate=useNavigate()
  let submitform=(formdata)=>
  {
    axios.post('http://localhost:3500/user-api/userlogin',formdata)
    .then((dbres)=>
    {
      console.log(dbres.data.form1status)
      if(dbres.data.flag==1)
      {
        setusernameerror("*invalid username")
      }
      else if(dbres.data.flag==2)
      {
        setusernameerror("")
        setpassworderror("*password does not match")
      }
      else 
      {
        setloginuser(formdata.username)
        setusernameerror("")
        setpassworderror("")
        setuserloginstatus(false)
        if(dbres.data.form1status===true&&dbres.data.form2status===true)
        {
           navigate('/eligibleschemes')
        }
        else if(dbres.data.form1status===true&&dbres.data.form2status===false)
        {
           navigate('/userform2')
        }
        else 
         {
           navigate('/userform1')
         }
        
      }
    })
    
  }
  return (
    <div className='userloginbody'>
       <div className="usercontainer">  
          <form autoComplete="off" onSubmit={handleSubmit(submitform)}>
             <div className="formcontrol">
               <div>
                 <h3 className='userloginheading mb-2'>User Login:</h3>
                 <label htmlFor="useremail"><b>Username</b></label>
                 <input type="text"  className="form-control" id="useremail" required {...register("username")}/>
                 {usernameerror&&<span className='text-danger'>{usernameerror}</span>}
               </div>
               <div className="form-group">
                 <label htmlFor="userpassword"><b>Password</b></label>
                 <input type="password" className="form-control" id="userpassword" required {...register("password")}/>
                 {passworderror&&<span className='text-danger'>{passworderror}</span>}
               </div>
              </div>
              <div id="liveAlertPlaceholder"></div>
                <div className="g-recaptcha" data-sitekey="6LfoGssmAAAAAJOL8-eANYwLOkiRTyQ1RZj7oJEu"></div> 
                 <button type="submit" className="btn btn-danger my-2"  id="btn11">Login</button>
           </form>
        </div>
      </div>
  )
}

export default Userlogin;
