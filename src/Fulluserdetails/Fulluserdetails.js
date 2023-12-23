import React, { useState } from 'react'
import { useContext } from 'react';
import { logincontext } from '../components/Contextapis/Contextapi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Fulluserdetails() {
   
   
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
    backgroundColor: '#333',
    color: '#fff'
  },
};


    let [ , , , ,adminlogin,setadminlogin,userdetails,setuserdetails]=useContext(logincontext)
    let [users,setusers]=useState({})
    let navigate=useNavigate()
    useEffect(()=>
    {
        if(adminlogin=="")
        {
            navigate('/adminlogin')
        
        }

    },[])
    
  return (
    <div style={styles.body}>
       <h3 style={{marginTop:'100px'}}>User details</h3>

       <table style={styles.table}>
           <tr>
              <th style={styles.th}>Username</th>
              <td style={styles.tableThTd}>{userdetails.username}</td>
            </tr>
            <tr>
              <th style={styles.th} >Name</th>
               <td style={styles.tableThTd} >{userdetails.firstname}</td>
            </tr>
            <tr>
               <th style={styles.th} >Age</th>
               <td style={styles.tableThTd}>{userdetails.age}</td>
            </tr>
            <tr>
              <th style={styles.th} >DOB</th>
              <td style={styles.tableThTd}>{userdetails.dateofbirth}</td>
            </tr>
            <tr>
              <th style={styles.th} >Gender</th>
              <td style={styles.tableThTd}>{userdetails.gender}</td>
            </tr>
            <tr>
              <th style={styles.th} >Mobile no</th>
              <td style={styles.tableThTd}>{userdetails.mobilenumber}</td>
            </tr>
            <tr>
              <th style={styles.th} >City</th>
              <td style={styles.tableThTd}>{userdetails.city}</td>
            </tr>
            <tr>
              <th style={styles.th} >District</th>
            <  td style={styles.tableThTd}>{userdetails.district}</td>
            </tr>
            <tr>
              <th style={styles.th} >State</th>
              <td style={styles.tableThTd}>{userdetails.state}</td>
            </tr>
            <tr>
              <th style={styles.th} >Land District</th>
              <td style={styles.tableThTd}>{userdetails.landdistrict}</td>
            </tr>
            <tr>
              <th style={styles.th} >Sub division</th>
              <td style={styles.tableThTd}>{userdetails.subdivision}</td>
            </tr>
            <tr>
              <th style={styles.th} > State</th>
              <td style={styles.tableThTd}>{userdetails.state}</td>
            </tr>
            <tr>
              <th style={styles.th} >Land village</th>
              <td style={styles.tableThTd}>{userdetails.landcity}</td>
            </tr>
            <tr>
              <th style={styles.th}  >Type of crop</th>
              <td style={styles.tableThTd}>{userdetails.typeofcrop}</td>
            </tr>
            <tr>
              <th  style={styles.th}>Land area (acres)</th>
              <td style={styles.tableThTd}>{userdetails.landarea}</td>
            </tr>
            <tr>
              <th style={styles.th} >Organic farming</th>
              <td style={styles.tableThTd}>{userdetails.organicfarming}</td>
            </tr>
            <tr>
              <th style={styles.th} >Insurance</th>
              <td style={styles.tableThTd}>{userdetails.insurance}</td>
            </tr>
       </table>
    </div>
  )
}

export default Fulluserdetails;
