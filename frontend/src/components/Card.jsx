import React from 'react'
import '../styles/Card.css'

export default function Card(props) {
    const image = props.image;
    const imageNumber = props.imageNumber;
    console.log(props);

    return (
        <div className='card-container'>
            {/* Use selectedImage directly */}
            {/* <img src={image} className="cardImage" /> */}
            <div className="cardText">
                <p>Country</p>
                <p>There are some materials here, it's so crazy for real!</p>
            </div>
        </div>
    )
}