import React from 'react'; 
import './Navbar.scss';
import {NavLink} from "react-router-dom";

const Navbar = ({links}) => {
        return (
                <nav className="navbar-list">
                {links.map(({name, href}, index) => {      
                      return (                
                           <a href={href}>{name}</a>       
                      )                      
                })}     
            </nav> 
        )
}


export default Navbar;