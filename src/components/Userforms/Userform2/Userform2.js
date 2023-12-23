import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { logincontext } from '../../Contextapis/Contextapi';
import axios from 'axios';
import { useEffect } from 'react';

function Userform2() {
  let {register,handleSubmit}=useForm()
  let [ , ,loginuser]=useContext(logincontext)
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
    axios.post(`http://localhost:3500/user-api/userform2/${loginuser}`,formdata)
    .then((dbres)=>
    {
      if(dbres.status==201)
      {
        navigate('/eligibleschemes')
        console.log(dbres)
      }
      else 
      {
        console.log("error in saving land details")
      }
    })
    .catch((err)=>
    {
      console.log("error in saving land details is",err)
    })
    
  }
  return (
    <div className="container mt-4">
      <form className="needs-validation mt-4" onSubmit={handleSubmit(submitform)}>
        <h3 style={{ marginTop: '100px' }}>Enter Land Details:</h3>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom01">Land District</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="District" required {...register("landdistrict")} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom02">Sub Division</label>
            <input type="text" className="form-control" id="validationCustom02" placeholder="Sub Division" required {...register("subdivision")} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationCustom03">Village</label>
            <input type="text" className="form-control" id="validationCustom03" placeholder="Village" required {...register("landcity")} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="crop">Type of Crop</label>
            <select id="crop" className="form-control" {...register("typeofcrop")}>
              <option selected>Choose...</option>
              <option value="horiculture">Horticulture</option>
              <option value="foodcrop">Food Crop</option>
              <option value="oilseeds">Oil Seeds</option>
              <option value="coconutpalmoils">Coconut Palm Oils</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="area">Land Area (acres)</label>
            <input type="number" className="form-control" id="area" placeholder="Acres" required  {...register("landarea")} />
          </div>
          <div className="col-md-2 mb-3">
            <label htmlFor="org">Organic farming</label>
            <button style={{borderRadius: '50%',backgroundColor:'black'}} type="button" className="btn1 btn-secondary" data-toggle="tooltip" data-placement="right"  title="Organic farming, also known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.">
              <b>i</b>
            </button>
            <input type="text" className="form-control" id="org" placeholder="Yes/No" required {...register("organicfarming")} />
          </div>
          <div className="col-md-2 mb-3">
            <label htmlFor="ins">Insurance</label>
            <button style={{borderRadius: '50%',backgroundColor:'black'}} type="button" className="btn1 btn-secondary" data-toggle="tooltip" data-placement="right" title="Crop insurance is a means of protecting the agriculturist against financial losses due to uncertainties that may arise from crop failures/losses arising from named or all unforeseen perils beyond their control.">
              <b >i</b>
            </button>
            <input type="text" className="form-control" id="ins" placeholder="Yes/No" required {...register("insurance")} />
          </div>
        </div>
        <input type="submit" id="register" value="Submit details" className="btn btn-outline-dark" />
      </form>
    </div>
  );
}


export default Userform2;
