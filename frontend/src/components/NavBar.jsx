import React from 'react'
import '../styles/NavBar.css'
import { useLocation } from 'react-router-dom'


export default function NavBar() {
    const location = useLocation();
    const yesNavBar = ['/', '/results'] // pages with no nav bar
    if (!yesNavBar.includes(location.pathname)) {
        return (<></>)
    }


    return (
        <div className='nav-container'>
            <div>Hello</div>
            <div className='nav'>
                <div>Home</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
        </div>
    )
}
