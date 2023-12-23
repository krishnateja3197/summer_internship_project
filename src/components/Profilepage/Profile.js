import React from 'react'
import { logincontext } from '../Contextapis/Contextapi';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Profile() {

     
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    textAlign:'center'
  },
  table: {
    width: '60%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
    margin:'auto'
  },
  tableThTd: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#D3D3D3'
  }
}

    let [userprofile,setuserprofile]=useState({})
    let navigate=useNavigate()
    let [ , ,loginuser]=useContext(logincontext)
    useEffect(()=>
    {
        if(loginuser=="")
        {
            navigate('/userlogin')
        }
        else 
        {
            axios.get(`http://localhost:3500/user-api/userprofiledetails/${loginuser}`)
            .then((dbres)=>
            {
               if(dbres.data.flag==1)
                {
                  navigate('/userform1')
                }
                else 
                {
                   setuserprofile(dbres.data.user)
                }
            })
            .catch((err)=>
            {
               console.log(err);
            })
        }

    },[])

  return (
    <div style={styles.body}>
       <h3 style={{marginTop:'100px'}}>User profile</h3>

       <table style={styles.table}>
           <tr>
              <th style={styles.th}>Username</th>
              <td style={styles.tableThTd}>{userprofile.username}</td>
            </tr>
            <tr>
              <th style={styles.th} >Name</th>
               <td style={styles.tableThTd} >{userprofile.firstname}</td>
            </tr>
            <tr>
               <th style={styles.th} >Age</th>
               <td style={styles.tableThTd}>{userprofile.age}</td>
            </tr>
            <tr>
              <th style={styles.th} >DOB</th>
              <td style={styles.tableThTd}>{userprofile.dateofbirth}</td>
            </tr>
            <tr>
              <th style={styles.th} >Gender</th>
              <td style={styles.tableThTd}>{userprofile.gender}</td>
            </tr>
            <tr>
              <th style={styles.th} >Mobile no</th>
              <td style={styles.tableThTd}>{userprofile.mobilenumber}</td>
            </tr>
            <tr>
              <th style={styles.th} >City</th>
              <td style={styles.tableThTd}>{userprofile.city}</td>
            </tr>
            <tr>
              <th style={styles.th} >District</th>
            <  td style={styles.tableThTd}>{userprofile.district}</td>
            </tr>
            <tr>
              <th style={styles.th} >State</th>
              <td style={styles.tableThTd}>{userprofile.state}</td>
            </tr>
         </table>
      </div>
  )
}

export default Profile;
