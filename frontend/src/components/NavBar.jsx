import React from 'react'
import '../styles/NavBar.css'
import { useLocation } from 'react-router-dom'
import topLogo from "../assets/temporary_shit_logo4.png"


export default function NavBar() {
    const location = useLocation();
    const yesNavBar = ['/', '/results'] // pages with no nav bar
    if (!yesNavBar.includes(location.pathname)) {
        return (<></>)
    }


    return (
        <>
        <div className='whiteBoxLogo'>
            
        </div>
        <img src={topLogo} alt="" className="top-logo"/>
        <div className='nav-container'>
            <div className='nav'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
        </div>
        </>
    )
}
