import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import '../styles/ResultsScreen.css';
import bigTitle from "../assets/temporary shit logo27.png";
import { useLocation } from "react-router";
import bg from "../assets/bigglobe.gif";
import ItemImpact from "../components/ItemImpact";
import Map from "../components/Map";

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [device, setDevice] = useState(null);
    const [loading, setIsLoading] = useState(false); // TODO: make it true
    const location = useLocation();
    
    const acceptable_devices = ['iphone', 'android']


    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            setDevice(location.state);
            if (location.state === "null") setIsLoading(false);
            if (device === null) return;

            if (!acceptable_devices.includes(location.state)) {
                setDevice("Invalid Device");
                setIsLoading(false);
                return;
            }
        
            const response = await axios.get(`http://localhost:5000/api/${device}`);
            setManufacturers(response.data.manufacturers);
            setRawMaterials(response.data.raw_materials);
            setIsLoading(false);
        };


        if (loading) fetchData();
    }, [device]);

    const bgStyles = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        top:0,
        display: 'flex',
        zIndex: -100,
      };


    return (
        <>
        {!loading ? (
            <>
                <div className="top">
                    <img src={bigTitle} alt="" className="title" />
                </div>
                
                <div className="columns">
                    <div className="left">
                        <Map />
                    </div>
                    <div className="right">
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                        <div className="a">
                            alksjdfjklasfdjlkasdfjklasdf
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
        )}        
        </>
    );
}

// { manufacturers && 
//     Object.keys(manufacturers).map((key) => {
//         console.log(key);
//         return (
//         <div key={key + '1'}>
//             <h2>{key}</h2>
//             <h3>{manufacturers[key]}</h3>
//         </div>
//     )})
// }

// { rawMaterials && 
//     Object.keys(rawMaterials).map((key) => {
//         console.log(key);
//         return (
//         <div key={key + '2'}>
//             <h2>{key}</h2>
//             <h3>{rawMaterials[key]}</h3>
//         </div>
//     )})
// }