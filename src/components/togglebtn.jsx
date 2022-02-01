import React from 'react';
import "./togglebtn.css";
// import { useState } from "react";


function Togglebtn({theme, toggleMode}) {

console.log(theme)
// console.log(toggleMode)
const handleClickEvent = (e)=>{
// e.preventDefault()
    toggleMode()
}
    return (
        <button onClick={handleClickEvent} className= {`${theme ? "cbtn sky" : "cbtn"}`} ><img className="btnimg" alt="toggleButton"></img></button>
    )
}

export default Togglebtn
