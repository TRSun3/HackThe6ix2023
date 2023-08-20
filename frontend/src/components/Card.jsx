import React from 'react'
import '../styles/Card.css'

export default function Card(props) {
    const image = props.image;
    const imageNumber = props.imageNumber;

    const selectedImage = imageNumber === 1
        ? "../assets/temporary shit logo22.png"
        : "../assets/temporary shit logo23.png";

    return (
        <div className='whiteBoxLogo'>
            {/* Use selectedImage directly */}
            <img src={image} className="cardImage" />
            <div className="cardText">
                <p>Country</p>
                <p>There are some materials here, it's so crazy for real!</p>
            </div>
        </div>
    )
}