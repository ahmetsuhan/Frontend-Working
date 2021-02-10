import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements';
function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
