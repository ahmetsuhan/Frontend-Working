import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import {useState} from 'react';
import Button from './Button';
import './Navbar.css';


const Navbar = () => {

const [click,setClick]= useState(false);
const[button,setButton]=useState(true);

const handleClick = () =>{
    setClick(!click);
}
const closeMobileMenu=()=>{
    setClick(false);
}
const showButton=()=>{
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true);
    }
}

window.addEventListener("resize",showButton);

    return (
        <>
         <div className="navbar">
            <div className="navbar-container container">
                <Link to="/"className="navbar-logo">
                    <MdFingerprint className="nav-icon"></MdFingerprint>
                    ASO
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click?<FaTimes/>:<FaBars/>}
                </div>
                <ul className={click?'nav-active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button? (
                            <Link to ="/sign-up"className="nym-link">
                                <button buttonStyle="btn--outline" >SIGN UP</button>
                            </Link>
                        ): (
                            <Link to="/sign-up"className="btn-link">
                                <Button buttonStyle="btn--outline"
                                buttonSize="btn--mobile">SIGN UP</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
             </div>   
        </>
    )
}

export default Navbar
