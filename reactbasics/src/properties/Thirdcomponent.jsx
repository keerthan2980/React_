const Thirdcomponent=(props)=>{
    const {name,area,pincode,education}=props.userName
    return(
        <>
         <div style={{ border: "1px solid red" }}>
        <h1>destructuring :: {pincode}</h1>
        <h2>{area}</h2>
        </div>
        </>
    )
}
export default Thirdcomponent