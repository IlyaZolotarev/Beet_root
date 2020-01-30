import React from 'react';
import './NavbarSection.scss';
import Navbar from './components/Navbar/Navbar';
import {links} from './data';

const NavbarSection = () => {
    return (
        <section className="navbar-section">
            <div className="content-container navbar-section__container">
            <Navbar links= {links} /> 
            </div>
        </section>
    );
} 

export default NavbarSection;