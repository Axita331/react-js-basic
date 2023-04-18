import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

    const getActiveClass = (navProps) => {
        if(navProps?.isActive) {
            return {
                color: 'red'
            }
        }
        
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={'users'} style={getActiveClass}>Users</NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to={'albums'} style={getActiveClass}>Albums</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav