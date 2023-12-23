const exp= require("express")

//used to handle errors
const expressAsyncHandler = require("express-async-handler")

const schemes=require("../../src/components/Schemespage/Schemedetails")

const eligibleschemes=[]


//used to hash password
const bcryptjs=require("bcryptjs")

const userapp=exp.Router() 

//import jsonwebtoken 
const jwt=require("jsonwebtoken")

userapp.use(exp.json())


const evaluateschemes=(userformdata)=>
{
   if(userformdata.state=="Telangana"&&userformdata.landarea>0)
   {
    const scheme1=schemes.find((scheme)=>scheme.id==12)
    eligibleschemes.push(scheme1)
   }
   if(userformdata.landarea>0)
   {
    const scheme1=schemes.find((scheme)=>scheme.id==10)
    const scheme2=schemes.find((scheme)=>scheme.id==5)
    eligibleschemes.push(scheme1)
    eligibleschemes.push(scheme2)
   }
   if(userformdata.landarea>0&&userformdata.landarea<5)
   {
    const scheme1=schemes.find((scheme)=>scheme.id==7)
    eligibleschemes.push(scheme1)

   }
   if(userformdata.insurance.toLowerCase()=="yes"&&(userformdata.typeofcrop=="horiculture"||userformdata.typeofcrop=="foodcrop"||userformdata.typeofcrop=="oilseeds"))
   {
    const scheme1=schemes.find((scheme)=>scheme.id==1)
    const scheme2=schemes.find((scheme)=>scheme.id==2)
    eligibleschemes.push(scheme1)
    eligibleschemes.push(scheme2)
   }
   if(userformdata.typeofcrop=="coconutpalmoils")
   {
    const scheme1=schemes.find((scheme)=>scheme.id==3)
    eligibleschemes.push(scheme1)
   }
   if(userformdata.age>=60&&userformdata.landarea<5)
   {
    const scheme1=schemes.find((scheme)=>scheme.id==4)
    eligibleschemes.push(scheme1)
   }
   if(userformdata.organicfarming.toLowerCase()=="yes")
   {
    const scheme1=schemes.find((scheme)=>scheme.id==6)
    const scheme2=schemes.find((scheme)=>scheme.id==8)
    const scheme3=schemes.find((scheme)=>scheme.id==9)
    eligibleschemes.push(scheme1)
    eligibleschemes.push(scheme2)
    eligibleschemes.push(scheme3)
   }
   if(userformdata.organicfarming.toLowerCase()=="yes"&&(userformdata.typeofcrop=="oilseeds"||userformdata.typeofcrop=="coconutpalmoils"))
   {
    const scheme1=schemes.find((scheme)=>scheme.id==11)
    eligibleschemes.push(scheme1)
   }
}



//user registeration
userapp.post('/userregister',expressAsyncHandler(async(request,response)=>
{

    //import userscollection obj 
    const userscollectionobj=request.app.get("userscollectionobj")

    //get user obj
    const newuser=request.body 

    //get data from collection
    const userofdb=await userscollectionobj.findOne({username:newuser.username})

    //if user exists 
    if(userofdb!=null)
     response.status(200).send({message:"user already existed"})

    else 
    {
        //hash the password 
        const hashedpassword=await bcryptjs.hash(newuser.password,5);

        //replace plain password with hashed passowrd 
        newuser.password=hashedpassword;

       delete newuser.confirmpassword

        newuser.form1status="false"
        newuser.form2status="false"

        //insert user 
        userscollectionobj.insertOne(newuser)

        response.status(201).send({message:"new user created"})
    }

}))


//user login verification
userapp.post('/userlogin',expressAsyncHandler(async(request,response)=>
{
    //import userscollectionobj 
    const userscollectionobj=request.app.get("userscollectionobj")

    const usercredobj=request.body 

    const userofdb=await userscollectionobj.findOne({username:usercredobj.username})

    //if username is not valid 
    if(userofdb==null)
    {
        response.status(200).send({flag:1})
    }
    //if username match 
    else
    {

        //if passwords does not match 
        let isequal=await bcryptjs.compare(usercredobj.password,userofdb.password)

        if(isequal==false)
        {
            response.status(200).send({flag:2})
        }
        //if passwords match 
        {
            //create a jwt token 
            let jwttoken=await jwt.sign({username:userofdb.username},'abcdef',{expiresIn:'1h'})


            if(userofdb.form1status==="true"&&userofdb.form2status=="true")
            {
                //send response with form1 status true
                response.status(200).send({flag:3,form1status:true,form2status:true})
            }
            else if(userofdb.form1status==="true"&&userofdb.form2status=="false")
            {
                //send response with form1 status true
                response.status(200).send({flag:3,form1status:true,form2status:false})
            }
            else 
            {
                 //send response with form1 status true
                 response.status(200).send({flag:3,form1status:false,form2status:false})
            }


        }



    }



}))


//save user personal details
userapp.post('/userform1/:id', expressAsyncHandler(async (request, response) => {
    try {
        // Get username
        let existingusername = request.params.id;

        // Get form data
        let userformdata = request.body;

        //import userscollection obj
        const userscollectionobj=request.app.get("userscollectionobj")

        //get the object by username from userscolletion and update form1status
         await userscollectionobj.updateOne({username:existingusername},{$set:{form1status:"true"}})



        // Import personal details collections obj
        const userpersonaldetailscollectionobj = request.app.get("userpersonaldetailscollectionobj");

        // Add username to form data
        userformdata.username = existingusername;

        // Insert into personal details
        const result = await userpersonaldetailscollectionobj.insertOne(userformdata);

        //get obj by username from userscollectionobj


        response.status(201).send({ message: "user data saved", schemes:eligibleschemes });
    } catch (error) {
        console.error("Error in /userform1/:id", error);
        response.status(500).send({ message: "Internal Server Error", error: error.message });
    }
}));


//save user land details

userapp.post('/userform2/:id', expressAsyncHandler(async (request, response) => {
    try {
        // Get username
        let existingusername = request.params.id;

        // Get form data
        let userformdata = request.body;

        
        //import userscollection obj
        const userscollectionobj=request.app.get("userscollectionobj")

        //get the object by username from userscolletion and update form12status
         await userscollectionobj.updateOne({username:existingusername},{$set:{form2status:"true"}})

        // Import land details collection object
        const userlanddetailscollectionobj=request.app.get("userlanddetailscollectionobj")


        // Add username to form data
        userformdata.username = existingusername;

        // Insert into personal details
        const result = await userlanddetailscollectionobj.insertOne(userformdata);

        response.status(201).send({ message: "user data saved", schemes:eligibleschemes });
    } catch (error) {
        console.error("Error in /userform1/:id", error);
        response.status(500).send({ message: "Internal Server Error", error: error.message });
    }
}));


//find eligible schemes
userapp.get('/eligibleschemes/:id',expressAsyncHandler(async(request,response)=>
{

   
    // Import personal details collections obj
    const userpersonaldetailscollectionobj = request.app.get("userpersonaldetailscollectionobj");

     // Import land details collection object
     const userlanddetailscollectionobj=request.app.get("userlanddetailscollectionobj")

     //get the username from request
     const existingusername=request.params.id

     //find user personal data
     const userpersonaldata=await userpersonaldetailscollectionobj.findOne({username:existingusername})

     //find userdata in land details 
     const userlanddata=await userlanddetailscollectionobj.findOne({username:existingusername})

     //join two objects 
     Object.assign(userpersonaldata,userlanddata)


     evaluateschemes(userpersonaldata)

     response.status(200).send({schemes:eligibleschemes})

}))


//get profile details 
userapp.get('/userprofiledetails/:id',expressAsyncHandler(async(request,response)=>
{
    
        // Import personal details collections obj
        const userpersonaldetailscollectionobj = request.app.get("userpersonaldetailscollectionobj");

        //get username
        const existingusername=request.params.id 

        //serach in db
        const userofdb=await userpersonaldetailscollectionobj.findOne({username:existingusername})

        if(userofdb==null)
         response.status(200).send({flag:1})

        response.status(200).send({message:"user details",user:userofdb})

}))


module.exports=userapp