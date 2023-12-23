import React, { useState } from 'react'
import './Displaypersonaldetails.css'
import {logincontext} from '../Contextapis/Contextapi';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Displaypersonaldetails() {
    let navigate=useNavigate()
    let [ , , , ,adminlogin,setadminlogin,userdetails,setuserdetails]=useContext(logincontext)
    let [usersofdb,setusersofdb]=useState([])
    const displayuserdetails=(userobj)=>
    {
      setuserdetails(userobj)
      navigate('/fulluserdetails')
    }
    useEffect(()=>
    {
        if(adminlogin=="")
        navigate('/adminlogin')
       else 
       {
          axios.get('http://localhost:3500/admin-api/userdetails')
          .then((dbres)=>
          {
             setusersofdb(dbres.data.users)
          })
          .catch((err)=>
          {
            console.log("error is ",err);
          })
       }
    },[])
  return (
    <div className='displaydetailsbody'>
      <h2 className='tabletitle'>User personal details</h2>
      <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Gender</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody>
        {usersofdb?.map(user => (
          <tr key={user.firstname}>
            <td>{user.firstname}</td>
            <td>{user.age}</td>
            <td>{user.dateofbirth}</td>
            <td>{user.gender}</td>
            <td>{user.city}</td>
            <td>{user.state}</td>
            <td><button className='btn btn-danger' onClick={()=>displayuserdetails(user)}>Full details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Displaypersonaldetails;
