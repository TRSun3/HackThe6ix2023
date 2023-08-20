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
        <div className='whiteShit'></div>
        <img src={topLogo} alt="" className="top-logo"/>
        <div className='nav-container'>
            <div className='nav'>
                <a href='#home' className='nav-item'>Home</a>
                <a href='#about-us' className='nav-item'>About Us</a>
            </div>
        </div>
        </>
    )
}
