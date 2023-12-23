import { createContext } from "react";
import { useState } from "react";

export const logincontext=createContext() 

function Contextapi({children})
{
    let [userloginstatus,setuserloginstatus]=useState(true)
    let [loginuser,setloginuser]=useState("")
    let [adminlogin,setadminlogin]=useState("")
    let [userdetails,setuserdetails]=useState({})
    let form1status=false
    return(
        <div>
            <logincontext.Provider value={[userloginstatus,setuserloginstatus,loginuser,setloginuser,adminlogin,setadminlogin,userdetails,setuserdetails,form1status]}>
                {children}
            </logincontext.Provider>
        
        </div>
    )
}
export default Contextapi;
