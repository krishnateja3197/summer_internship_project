import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import './Eligibleschemes.css'
import { logincontext } from '../Contextapis/Contextapi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Eligibleschemes() {
  let [ , ,loginuser] = useContext(logincontext);
  let [schemes,setschemes]=useState([])
  const navigate=useNavigate()   

  useEffect(() => {
    if(loginuser=="")
    navigate('/userlogin')
   else 
   {

    axios.get(`http://localhost:3500/user-api/eligibleschemes/${loginuser}`)
      .then((dbres) => {
        setschemes(dbres.data.schemes);
        console.log(dbres.data.schemes);
      })
      .catch((err)=>
      {
        console.log("error is ",err)
      })
    }
  }, []);

  return (
    <div className='schemesbody'>
      <h2 className='schemedetails'>Congratulations you are eligible for following schemes</h2>
      <div className='container'>
        {
          schemes?.map((scheme) => (
            <div key={scheme.id} className="col-md-12 my-2">
              <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-info">Scheme</strong>
                  <h3 className="mb-0 my-2">{scheme.name}</h3>
                  <p className="card-text mb-auto">{scheme.data}</p>
                  <a href={scheme.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img className="bd-placeholder-img" width="200" height="250" src={scheme.image} alt="" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Eligibleschemes;
