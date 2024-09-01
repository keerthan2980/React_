
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formevents=()=>{
    const [username,setUsername]=useState(""); 
    // it will store the username from the and if we remove this the out put will display when we type in the inut filed
    const getUsername =(event)=>{
        setUsername(event.target.value)
    }
    //  this part will store of user name when we click submit button we will git values 
    const [newuser,setNewuser]=useState(""); 
    // third party package react-toastify it give the notification
    const notify = () => toast("new user was updated", {
        //this is styling to the toast 

            style: {
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '8px',
                padding: '16px',
            },
            bodyStyle: {
                fontSize: '16px',
            }
        });
    // const notify=()=>toast("new user was updated")   if u dont need styling  u can comment int the above one  
    const Newuserdetailes =()=>{
        setNewuser(username);
        notify() // we hava calledd the function after submiting the form 
    }
    return(
        <>
        <div> 
            <h1> welcome u have typed stored ::: {newuser}</h1> {/* from output */}
            <h2> welcome to which was directly typed :: {username}</h2> {/* shows the text in the input field*/}
            {/* by this we can get the detiales from the input field*/}
            <input type="text" placeholder="enter the text" onChange={getUsername}/><br/> 
            <button onClick={Newuserdetailes}>Submit</button>
             <ToastContainer />
        </div>
        </>
    )
}
export default Formevents