import React from "react";
import { useState } from "react";

const Statemangement=()=>{
    const [city,setCity]=useState("Hyderabad");
{/* condition
    if (city=="Hyderabad"){
        setCity("Nizamabad")
    }
    */}
    console.log(city)
    setCity("Nizamabad")
    return(
        <div>Statemanagement {city} </div>
    )
   
}
export default Statemangement