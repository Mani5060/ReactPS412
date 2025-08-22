import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User=()=>{
    var {fname,lname}=useParams();
    var location=useLocation();
    console.log(location);
    return(
        <>
            <h1>Student name is {fname} {lname}</h1>
            <h3>Current Location is {location.pathname} </h3>
        </>
    )
}

export default User;