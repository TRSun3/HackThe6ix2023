import React from 'react'
import { useLocation } from 'react-router-dom'


export default function NavBar() {
    const location = useLocation();
    const yesNavBar = ['/', '/results'] // pages with no nav bar
    if (!yesNavBar.includes(location.pathname)) {
        return (<></>)
    }


    return (
        <div className='relative flex w-full justify-between items-center bg-yellow-50 px-8 py-5 gap-16'>
            <div class='flex items-center gap-16'>
                <div>Logo</div>
                <div>Marks</div>
                <div>Achievements</div>
                <div>Users</div>
            </div>
        </div>
    )
}
