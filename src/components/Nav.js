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
                                <NavLink to={'counter'} style={getActiveClass}>Counter (Connect)</NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to={'register'} style={getActiveClass}>Users (Connect)</NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to={'comments'} style={getActiveClass}>Comments (Connect + thunk)</NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to={'photos'} style={getActiveClass}>Photos (Hooks + thunk)</NavLink>
                            </li>
                            <li className="nav-item ps-2">
                                <NavLink to={'todos'} style={getActiveClass}>Todos (Saga)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav