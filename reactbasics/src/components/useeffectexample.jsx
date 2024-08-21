import { useState,useEffect } from "react";


const Exampleuseeffect =()=>{
    const[city,setCity]=useState("Hyderabad");

    useEffect(()=>{
      if (city ==="goa"){
        setCity("Nizamabad")
      }
      else{
        setCity("Kamareddy")
      } 
    },[] )//[city] particular variable 
    return(
        <h1> where are u::{city} </h1>
    )

}
export default Exampleuseeffect