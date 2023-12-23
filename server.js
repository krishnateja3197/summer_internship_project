const exp = require("express")

//import path to connect react application and backend
const path= require("path")

//import mongodb
const mclient=require("mongodb").MongoClient

//import userapi
const userapp=require('./Apis/Userapi/Userapi')

//import adminapi
const adminapp=require('./Apis/Adminsapi/Adminapi')

const app=exp() 


app.listen(3500,()=>console.log("server is running!"))

//connecting to server 3500 port number 

app.use(exp.static(path.join(__dirname,'./build')))


app.use('/user-api',userapp)

app.use('/admin-api',adminapp)

const pagerefresh = (request, response, next) => {
    response.sendFile(path.join(__dirname, './build/index.html'));
  };
  
  // Use a wildcard '*' as the route path to catch all paths
  app.use('*', pagerefresh);
  

//connect to a database server 
mclient.connect("mongodb://localhost:27017")
.then((dbref)=>
{
    //connect to a databse 
    const dbobj=dbref.db("projectdb");

    //connect to a collection 
    const userscollectionobj=dbobj.collection("userscollection")

    //get personaldetailscollection
    const userpersonaldetailscollectionobj=dbobj.collection("userpersonaldetails")

    //get landdetails collection
    const userlanddetailscollectionobj=dbobj.collection("Landdetailscollection")


    //get schemedetails collection obj
    const schemescollectionobj=dbobj.collection("schemescollection")


    //get admins collection
    const adminscollectionobj=dbobj.collection("adminscollection")

    //export collections or send collections to another apis
    app.set("userscollectionobj",userscollectionobj)

    //export userpersonaldetails objct
    app.set("userpersonaldetailscollectionobj",userpersonaldetailscollectionobj)

    //export user land details collection object
    app.set("userlanddetailscollectionobj",userlanddetailscollectionobj)

    //export schemes collection obj
    app.set("schemescollectionobj",schemescollectionobj)

    //export adminscollectionobj
    app.set("adminscollectionobj",adminscollectionobj)


    console.log("connected to a database")
})
.catch((err)=>
{
    console.log("error in database connection is ",err)
})

//middlewares to handle errors 

const invalidpath=(request,response,next)=>
{
    response.send({message:"invalid path"})
}

app.use(invalidpath)

const errormiddleware=(error,request,response,next)=>
{
     console.log(error.message)
}
app.use(errormiddleware)