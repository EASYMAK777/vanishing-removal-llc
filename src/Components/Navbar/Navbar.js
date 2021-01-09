import React from "react"
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className = "Navbar">
            <div className = "navbar__title">
                <p>Vanishing Removal LLC</p>
            </div>

            <div className = "navbar__links">
                <Link to="/" className="navbar__link">
                        <div className="navbar__option">
                            <span className="navbar__option1">Home</span>
                            
                        </div>
                </Link>

                <Link to="/Team" className="navbar__link">
                        <div className="navbar__option">
                            <span className="navbar__option2">Team</span>
                            
                        </div>
                </Link>

                <Link to="/Contact" className="navbar__link">
                        <div className="navbar__option">
                            <span className="navbar__option3">Contact</span>
                            
                        </div>
                </Link>
                    
            </div>

            
        </nav>
    )
}

export default Navbar




