import React from 'react'
import '../styles/Card.css'

export default function Card(props) {
    const country = props.country;
    const desc = props.desc;
    console.log(props);

    return (
        <div className='card-container'>
            {/* Use selectedImage directly */}
            <div className="cardText">
                <p>{country}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}