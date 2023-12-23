import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { Modal,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [usernameerror,setusernameerror]=useState("f")
  const [passworderror,setpassworderror]=useState("f")
  const [confirmpassworderror,setconfirmpassworderror]=useState("f")
  let [password,setpassword]=useState("")
  let [username,setusername]=useState("")
  let [showmodal,setshowmodal]=useState(false)

  let submitform=(formdata)=>
  {
    axios.post('http://localhost:3500/user-api/userregister',formdata)
    .then((dbres)=>
    {
      if(dbres.status==200)
       {
        setusernameerror("*username already exists")
       }
      else if(dbres.status==201)
      {
        setshowmodal(true);
      }
    })
    .catch((error)=>console.log(error))
  }
  const success = {
    border: '3px solid green',
    fontSize: '15px',
  };
  const failure = {
    border:'3px solid red',
    fontSize: '15px',
  };
  const normal=
  {
    border:'2px solid black'
  }
  
  let checkinput1=(data)=>
  {
    if(data.length<7)
    {
      setusernameerror("*must contain atleast 7 characters")
    }
    else 
    {
      setusernameerror("")
      setusername(data)
    }
  }
  
  let checkinput2=(data)=>
  {

    if(data=="")
    {
       setpassworderror('*this field is required');
    }
    else if(username===data)
    {
      setpassworderror("*password and username must not be same")
    }
    else 
    {
        let char=0,up=0,sp=0;
        for (let i=0;i<data.length;i++)
        {
            char++;
            let k1=data[i];
            if(k1>='A'&&k1<='Z')
            up=1;
            if(k1=='!'||k1=='@'||k1=='#'||k1=='$'||k1=='%'||k1=='%'||k1=='^'||k1=='&'||k1=='*')
            sp=1;
        }
        if(char<8)
       setpassworderror('*must contain atleast 8 characters');
        else if(sp==0)
       setpassworderror('*must contain atleast 1 special symbol');
        else 
        {
            setpassworderror("");
            setpassword(data)
        }
    }
  }
  let checkinput3=(data)=>
  {

     if(data!=password)
      setconfirmpassworderror('*passwords does not match')
    else 
    {
      setconfirmpassworderror("")
    }
  }


  return (
    <div className='body'>
      <form  autoComplete="off" onSubmit={handleSubmit(submitform)}>
        <div className='container1 mt-4'>
          <h3 className='heading'>Please Register Here:</h3>
          <div className="formcontrol">
            <label htmlFor="username"><b>Username</b></label>
            <input
              type="text"
              autoFocus="on"
              onKeyUp={(e) => checkinput1(e.target.value)}
              className="form-control"
              name="username"
              id="username"
              required
              {...register("username")}
              style={usernameerror.length==1?normal:usernameerror.length>1?failure:success}
            />
            {usernameerror.length>1&&<span className='text-danger'>{usernameerror}</span>}
          </div>
          <div className="formcontrol">
            <label htmlFor="password1"><b>Password</b></label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password1"
              required
              onKeyUp={(e) => checkinput2(e.target.value)}
              style={passworderror.length===1?normal:passworderror.length>1?failure:success}
              {...register("password")}
            />
            {passworderror.length>1&&<span className='text-danger'>{passworderror}</span>}
          </div>
          <div className="formcontrol">
            <label htmlFor="confirmpassword"><b>Confirm Password</b></label>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              id="confirmpassword"
              required
              onKeyUp={(e) => checkinput3(e.target.value)}
              {...register("confirmpassword")}
              style={confirmpassworderror.length==1?normal:confirmpassworderror.length>1?failure:success}
            />
            {confirmpassworderror.length>1&&<span className='text-danger'>{confirmpassworderror}</span>}
          </div>
          <div id="liveAlertPlaceholder"></div>
          <div className="g-recaptcha" data-sitekey="6LfoGssmAAAAAJOL8-eANYwLOkiRTyQ1RZj7oJEu"></div>
          <button
            type="submit"
            className="btn btn-danger my-2"
            id="btn11"
            onClick={submitform}
          >
            Create Account
          </button>
        </div>
      </form>
      <Modal
      show={showmodal}
      backdrop='static'
      className='modal'
      centered>
        <Modal.Header>
          <Modal.Title className='mx-auto'>Choose Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to={'/adminlogin'} className='admin'>
            <div>
               <img src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg' alt='userimage'></img>
               <span>Admin</span>
             </div>
          </Link>
          <Link to={'/userlogin'} className='user'>
            <div>
              <img className='user' src='https://tse3.mm.bing.net/th?id=OIP.yAp_grCb02gcK-bZgEdwsAHaHa&pid=Api&P=0&h=180' alt='userimage'></img>
              <span>User</span>
             </div>
            </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Register;
