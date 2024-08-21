import { useState } from "react";

const Clickevent=()=>{
    const [number,setNumber]=useState(0);
     const increment=()=>{
        setNumber(number + 1);
     }
     const decrement=()=>{
        setNumber(number - 1);
     }
     const reset=()=>{
        setNumber(0);
     }
    
    return(
        <>
        <h1> number is {number} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Clickevent