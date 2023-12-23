import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigationbar.css'
import img1 from '../images/farmer.png'
import { Modal,Button } from 'react-bootstrap';
import { useContext } from 'react';
import { logincontext } from '../Contextapis/Contextapi';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Navigationbar() {
  let [showmodal,setshowmodal]=useState(false)
  let [userloginstatus,setuserloginstatus,loginuser ,setloginuser ,adminlogin,setadminlogin]=useContext(logincontext)

  let navigate=useNavigate()
  let changemodal=()=>
  {
    setshowmodal(!showmodal);
  }
  let setlogin=()=>
  {
    if(userloginstatus==false)
    {
       setuserloginstatus(true);
       setloginuser("")
      
    }
    else 
    {
      setadminlogin("")
    }
  }

  return(
    <div>

      <ul className='nav justify-content-start'>
         <li className='nav-item'>
           <Link className='nav-link' to={'/'} >Farmer Land Portal</Link>
        </li>
        <li className='nav-item'>
           <Link className='nav-link' to={'/'} >Home</Link>
        </li>
        <li className='nav-item'>
           {(adminlogin==""&&loginuser=="")&&<Link className='nav-link' to={'/register'}>Register</Link>}
        </li>
        <li className='nav-item'>
         {userloginstatus&&adminlogin==""? <Link className='nav-link'  onClick={changemodal}>Login</Link>: <Link className='nav-link'  onClick={setlogin}>Logout</Link>}
        </li>
        <li className='nav-item'>
            {adminlogin==""&&<Link className='nav-link' to={'/aboutus'}>About us</Link>}
        </li>
        <li className='nav-item'>
       {(loginuser!=""&&adminlogin=="")&&<Link className='nav-link user-profile-link' to={'/userprofile'}><img src={img1} alt='farmer-logo' className='farmerlogo'></img>Welcome {loginuser}</Link>}
        </li> 
      </ul>
    
      <Modal
      show={showmodal}
      backdrop='static'
      className='modal'
      centered>
        <Modal.Header>
          <Modal.Title className='mx-auto'>Choose Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to={'/adminlogin'} onClick={changemodal} className='admin'>
            <div>
               <img src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg' alt='userimage'></img>
               <span>Admin</span>
             </div>
          </Link>
          <Link to={'/userlogin'} onClick={changemodal} className='user'>
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

export default Navigationbar
