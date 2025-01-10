// circuite Evulation 
import React from "react";
import { useState } from "react"

 export const Circuit=()=>{

     const[game,setGame]=useState(false); 

     const Mygame=()=>{
        return(
            <>
              <h1> this is circuit Evulation</h1>
            </>
        )
     }

    return(
        <>
        <h1> welcome to </h1>  {/* if false it will execute*/}
        {/* if game is true the it will print react or else no  it was in useState  */}
       {game && <h1> react</h1>} 
       {game && <Mygame></Mygame>}
         </>
    )
}

