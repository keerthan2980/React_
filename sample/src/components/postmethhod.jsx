import React from "react";
import { useState } from "react";

const Postmethod=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [id,setId]=useState("");
    const [city,setCity]=useState("");
     
   // console.log(name,email,number,id,city);
    const Detailes={name,email,number,id,city}
      const Handler=(e)=>{
         e.preventDefault(e);//// Prevent the default form submission behavior
         console.log(Detailes)

   }  

    return(
        <div>
            <h1> welcome to post method</h1>
            <div className="Detailes">
                <div className="section">
                  <form onSubmit={Handler}>
                    <label>Enter the name:</label> 
                    <input type="text"  name="name" onChange={(e)=>setName(e.target.value)}></input><br></br>
                    <label>Enter the Email:</label>
                    <input type="email"  name ="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                    <label>Enter the Number:</label>
                    <input type="number"  name="number" onChange={(e)=>setNumber(e.target.value)}></input><br></br>
                    <label>Enter the id</label>
                    <input type="text" name="id" onChange={(e)=>setId(e.target.value)}></input><br></br>
                    <label>Enter the city</label>
                    <input type="text"  name="city" onChange={(e)=>setCity(e.target.value)}></input><br></br>
                    <button type="submit">Submit</button>
                  </form>
                </div>

            </div>
        </div>
    )
}
export default Postmethod