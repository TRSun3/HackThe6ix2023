import React, { useState, useEffect } from "react";
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

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [device, setDevice] = useState(null);
    const [loading, setIsLoading] = useState(true); // TODO: make it true
    const location = useLocation();
    const [targetRefs, setTargetRefs] = useState([]);
    
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
    
        return () => {
          observer.disconnect();
        };
    }, [targetRefs]);


    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectingDivId = entry.target.id;
            const country = intersectingDivId.slice(0, intersectingDivId.length - 1);

            console.log(country);
          }
        });
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
                        <div>
                            asljkfasfd
                        </div>
                        <Card image={Logo22}country={"Canada"} desc={"Hello World1"} />
                        <Card image={Logo23}country={"Mexico"} desc={"Hello World2"} />
                        <Card image={Logo22}country={"China"} desc={"Hello World3"} />
                        <Card image={Logo23}country={"Russia"} desc={"Hello World4"} />
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