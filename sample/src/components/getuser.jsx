import React, { useState,useEffect } from "react";
 const Userdata="https://jsonplaceholder.typicode.com/users" // data from the 

const Getuser=()=>{
    const [user,setUser]=useState([])
    // used to handle the fetch api 
    const Handler =async()=>{     
        const response= await fetch(Userdata);
        const newData=  await response.json();
        setUser(newData);

    };
    useEffect(()=>{
        console.log(Handler());
    },[]);
    console.log(user);
    return(
        <>
        <h1> welcome to get method</h1>
         {user.map((item)=>{
            return(
                <div className="usesection">
                    {item.email}
                    <h3> the name are {item.name}</h3>

                </div>
            )

         })} 
        </>
    )
}
export default Getuser 