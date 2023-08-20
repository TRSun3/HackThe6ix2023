import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import '../styles/ResultsScreen.css';
import bigTitle from "../assets/temporary shit logo27.png";
import { useLocation } from "react-router";
import bg from "../assets/bigglobe.gif";
import ItemImpact from "../components/ItemImpact";
import Map from "../components/Map";
import Card from "../components/Card"
import Logo22 from "../assets/temporary shit logo22.png";
import Logo23 from "../assets/temporary shit logo23.png";
import timeline from "../assets/temporary_shit_logo28.png"

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [device, setDevice] = useState(null);
    const [loading, setIsLoading] = useState(true); // TODO: make it true
    const location = useLocation();
    const [targetRefs, setTargetRefs] = useState([]);
    
    const acceptable_devices = ['iphone', 'android']
    const mapRef = useRef();


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

            setTargetRefs(targetRefs => Array(10).fill().map((_, i) => targetRefs[i] || React.createRef()))

            setIsLoading(false);
        };


        if (loading) fetchData();
    }, [device]);


    useEffect(() => {
        const options = {
          root: null,
          threshold: 1.0,
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
        targetRefs.forEach((ref) => {
          if (ref.current) {
            observer.observe(ref.current);
          }
        });
        console.log(targetRefs)
        return () => {
          observer.disconnect();
        };
    }, [targetRefs]);


    const handleIntersection = (entries) => {
        console.log(entries);
        const interestCountries = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectingDivId = entry.target.id;
            const country = intersectingDivId.slice(0, intersectingDivId.length - 1);

            console.log(country);
            interestCountries.push(country);
          }
        });
        // updateMap(interestCountries);
    };

    const updateMap = (countries) => {
        console.log(countries);
        // convert to the code
        if (mapRef.current) { // might not work lol
          mapRef.current.updateMapData(countries);
        }
    };
    

    return (
        <>
        {!loading ? (
            <>
                <a class="backToHome"href="/">Go to Upload Screen</a>
                <div className="top">
                    <img src={bigTitle} alt="" className="title" />
                </div>
                
                <div className="columns">
                    <div className="left">
                        <Map ref={mapRef}/>
                    </div>
                    <div className="right">
                    <img src={timeline} alt="" className="timeline" />
                        {
                            Object.keys(manufacturers).map((key, index) => {
                                return (
                                    <div ref={targetRefs[index]} id={key + '1'}>
                                        <Card image={Logo23} country={key} desc={manufacturers[key]} />
                                    </div>
                                )
                            })
                        }
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