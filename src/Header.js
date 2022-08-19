import React from "react";
import globe from './images/globe.png'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={globe} alt="globe" />
                <p>my travel journal</p>
            </div>
        </header>
    )
}