import React from "react"
import "../Navbar/Navbar.css"

function Navbar() {
    return (
        <div className = "Navbar">
            <div className = "navbar__title">
                <h1>Vanishing Removal LLC</h1>
            </div>
                <div className = "navbar__links">



                <ul>
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Team</p>
                    </li>
                    
                    <li>
                        <p>Contact</p>
                    </li>
                        
                </ul>
                </div>
            

            
        </div>
    )
}

export default Navbar
