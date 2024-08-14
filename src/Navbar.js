import React from "react";
import globeIcon from "./Images/Globe.png"

export default function Navbar(){
    return (
        <div className="navbar"> 
            <img src={globeIcon} alt="" className="globe-icon" />
            my travel journal.
        </div>
    )
}