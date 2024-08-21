import React from "react"
import Apple from './message'
<component></component>
const Mangoes =()=>{
    return (
        <h2>Mangoes are sweet </h2>
    )
}
const Grapes=()=>{
    return(
        <h2>Grapes are Good For health</h2>
    )
}
function Fruits(){
    return(
        <>
       <div>There are many Fruits
        <Mangoes></Mangoes>
        <Grapes></Grapes>
       {/* <Apple></Apple> */}
       </div>
        </>
    )
}
export default Fruits