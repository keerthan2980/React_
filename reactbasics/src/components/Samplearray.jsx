import React from "react";
import { Userdata } from "./userdata";
let Array= ["apple",30,"red",{fruit:"grapes"}]
let Student=[
    {
        name:"raju",
        Age:30,
        City:"Hyderabad"

    }
]
const Samplearray=()=>{ 
    return (
        <>
           <h1>  welcome to   {Array[0]} </h1>
           {/* for reterving the objects from Array 
             {Student.map((item)=>{
                return(
                    <div>
                        <h2>name is {item.name}</h2>
                     <h2> the age is   {item.Age} </h2>
                     <h2> the age is   {item.city} </h2>
                    </div>
                )
             }
            )}
             */}
              <h1 style={{color:"red", fontsize:"3px"}}>the emails the data is </h1>
             {Userdata.map((user)=>{
                return(
                    <div style={{ border: "1px solid blue" }}>
                        <h3 style={{fontsize:"10px",color:"green"}}> name is :{user.name}</h3>
                        <h2> email is :{user.email}</h2>
                    </div>
                )
             })}
           
        </>
    )

}
export default Samplearray