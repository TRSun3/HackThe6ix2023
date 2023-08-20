import React from 'react'
import '../styles/Card.css'

export default function Card(props) {
    const country = props.country;
    const desc = props.desc;
    const img = props.image;
    // console.log(props);
    // console.log(props);

    return (
        <div className='card-container'>
            <img src={img} class="cardHeader"/>
            <div className="cardText">
                <p className="Cardtext">{country}</p>
                <p className="Cardtext">{desc}</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}