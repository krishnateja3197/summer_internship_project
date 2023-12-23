import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logincontext} from '../../Contextapis/Contextapi';
import axios from 'axios';
import { useEffect } from 'react';

function Userform1() {
  let [ , ,loginuser, , , , , ,form1status]=useContext(logincontext)
   let {register,handleSubmit}=useForm()
   let navigate=useNavigate()
   useEffect(()=>
   {
 
      if(loginuser=="")
     {
       navigate('/userlogin')
      }
 
   },[])
 
   let submitform=(formdata)=>
   {


        if(formdata.mobilenumber.length!=10)
        {
          alert("please enter a valid mobile number")
        }
        else if(formdata.zip.length!=6)
        {
         alert("please enter a valid zip")
        }
        else 
        {

         axios.post(`http://localhost:3500/user-api/userform1/${loginuser}`,formdata)
         .then((dbres)=>
         {

          if(dbres.status==201)
          {
                
               navigate('/userform2')

          }
          else 
          {
            console.log(dbres)
          }

         })
         .catch((err)=>
         {
          console.log("error in catch block is ",err)
         })
      }

      
   }
  return (
   <div className="container mt-3 ">
   <form className="needs-validation mt-4" id="form1" onSubmit={handleSubmit(submitform)}>
     <h3 style={{ marginTop: '100px' }}>Enter Personal Information</h3>
     <div className="form-row">
       <div className="col-md-6 mb-3">
         <label htmlFor="validationCustom01">First name</label>
         <input type="text" className="form-control" id="validationCustom01" placeholder='First name' required {...register("firstname")}/>
         <div className="valid-feedback">Looks good!</div>
       </div>
       <div className="col-md-6 mb-3">
         <label htmlFor="validationCustom02">Last name</label>
         <input type="text" className="form-control" id="validationCustom02" placeholder='Lastname' required {...register("lastname")} />
         <div className="valid-feedback">Looks good!</div>
       </div>
     </div>
     <div className="form-row">
       <div className="col-md-6 mb-3">
         <label htmlFor="date">Date of birth</label>
         <input type="date" className="form-control" id="date" required {...register("dateofbirth")} />
       </div>
       <div className="col-md-4 mt-4 mx-5">
         <label>Gender</label>
         <div className="custom-control custom-radio custom-control-inline my-2 ml-4">
           <input type="radio" value="male" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" {...register("gender")} />
           <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
         </div>
         <div className="custom-control custom-radio custom-control-inline ml-4">
           <input type="radio" value="female" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"{...register("gender")} />
           <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
         </div>
       </div>
       <div className="col-md-6 mb-3">
         <label htmlFor="age">Age</label>
         <input type="number" className="form-control" id="age" placeholder="Enter your age" required {...register("age")} />
         <div className="valid-feedback">Looks good!</div>
       </div>
       <div className="col-md-6 mb-3">
         <label htmlFor="numberInput">Mobile Number</label>
         <input type="number" className="form-control" id="numberInput" maxLength="10"  required {...register("mobilenumber")}/>
         <div className="valid-feedback">Looks good!</div>
       </div>
     </div>
     <div className="form-row">
       <div className="col-md-6 mb-3">
         <label htmlFor="validationCustom03">Village/City</label>
         <input type="text" className="form-control" id="validationCustom03" placeholder="Village/City" required {...register("city")}/>
         <div className="invalid-feedback">Please provide a valid Village/City.</div>
       </div>
       <div className="col-md-6 mb-3">
         <label htmlFor="district">District</label>
         <input type="text" className="form-control" id="district" placeholder="District" required {...register("district")} />
         <div className="invalid-feedback">Please provide a valid district.</div>
       </div>
       <div className="form-group col-md-6">
         <label htmlFor="state">State</label>
         <select id="state" className="form-control" {...register("state")}>
           <option selected="">Choose...</option>
           <option value="AndhraPradesh">Andhra Pradesh</option>
           <option value="ArunachalPradesh">Arunachal Pradesh</option>
           <option value="Assam">Assam</option>
           <option value="Bihar">Bihar</option>
           <option value="Chattisgarh">Chattisgarh</option>
           <option value="Goa">Goa</option>
           <option value="Gujarat">Gujarat</option>
           <option value="Haryana">Haryana</option>
           <option value="HimachalPradesh">Himachal Pradesh</option>
           <option value="JammuAndKashmir">Jammu and Kashmir</option>
           <option value="Jharkhand">Jharkhand</option>
           <option value="Karnataka">Karnataka</option>
           <option value="Kerala">Kerala</option>
           <option value="MadhyaPradesh">Madhya Pradesh</option>
           <option value="Maharashtra">Maharashtra</option>
           <option value="Manipur">Manipur</option>
           <option value="Meghalaya">Meghalaya</option>
           <option value="Mizoram">Mizoram</option>
           <option value="Nagaland">Nagaland</option>
           <option value="Odisha">Odisha</option>
           <option value="Punjab">Punjab</option>
           <option value="Rajasthan">Rajasthan</option>
           <option value="Sikkim">Sikkim</option>
           <option value="TamilNadu">Tamil Nadu</option>
           <option value="Telangana">Telangana</option>
           <option value="Tripura">Tripura</option>
           <option value="Uttarakhand">Uttarakhand</option>
           <option value="UttarPradesh">Uttar Pradesh</option>
           <option value="WestBengal">West Bengal</option>         
         </select>
         <div className="invalid-feedback">Please provide a valid state.</div>
       </div>
       <div className="col-md-4 mb-4 mx-2">
         <label htmlFor="validationCustom05">Zip</label>
         <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required {...register("zip")}/>
         <div className="invalid-feedback">Please provide a valid zip.</div>
       </div>
     </div>
     <input type="submit" id="register" value="Next" className="btn btn-outline-dark" />
   </form>
 </div>

  )
}

export default Userform1;
