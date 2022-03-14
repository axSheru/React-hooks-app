import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    //NOTE: La diferencia entre Link y NavLink es que Navlink nos permite aplicar CSS si estamos en esa ruta.
    //NOTE: activeClassName se usa en versiones previas a V6 de React-Router-DOM
    //<NavLink activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
    //NOTE: Se usa una función dentro de className para definir el active condicional en V6 y posteriores.
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={`nav-link ${(navData) => navData.isActive && 'active'}`} aria-current="page" to="/">Home</NavLink>
                        <NavLink className={`nav-link ${(navData) => navData.isActive && 'active'}`} to="/about">About</NavLink>
                        <NavLink className={`nav-link ${(navData) => navData.isActive && 'active'}`} to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
