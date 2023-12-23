const exp= require("express")

//used to handle errors
const expressAsyncHandler = require("express-async-handler")

//used to hash password
const bcryptjs=require("bcryptjs")

const adminapp=exp.Router()

adminapp.use(exp.json())



adminapp.post('/adminlogin',expressAsyncHandler(async(request,response)=>
{

    //import admin collection obj
    const adminscollectionobj=request.app.get("adminscollectionobj")

    const admincredobj=request.body 

    const adminofdb=await adminscollectionobj.findOne({username:admincredobj.username})

    //if username is not valid 
    if(adminofdb==null)
    {
        response.status(200).send({flag:1})
    }
    //if username match 
    else
    {


        if(adminofdb.password!=admincredobj.password)
        {
            response.status(200).send({flag:2})
        }
        //if passwords match
        else  
        {

            response.status(200).send({flag:3})

        }


    }



}))



adminapp.get('/userdetails', expressAsyncHandler(async (request, response) => {
    try {
        const userfulldetails = [];

        // Import personal details collections obj
        const userpersonaldetailscollectionobj = request.app.get("userpersonaldetailscollectionobj");

        const usersofdb = await userpersonaldetailscollectionobj.find().toArray();

        // Import land details collection object
        const userlanddetailscollectionobj = request.app.get("userlanddetailscollectionobj");

        for (const user of usersofdb) {
            const userobj = await userlanddetailscollectionobj.findOne({ username: user.username });

            delete userobj.username;

            Object.assign(user, userobj);

            userfulldetails.push(user);
        }

        response.status(200).send({ message: "usersdetails", users: userfulldetails });
    } catch (err) {
        response.status(500).send({ message: "Error fetching user details", error: err });
    }
}));




module.exports=adminapp