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
import { getCode } from "country-list";


export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [device, setDevice] = useState(null);
    const [loading, setIsLoading] = useState(true); // TODO: make it true
    const location = useLocation();
    const [targetRefs, setTargetRefs] = useState([]);
    
    const [countries, setCountries] = useState([]);
    const acceptable_devices = ['iphone', 'android']
    const mapRef = useRef(null);


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
            console.log(response.data.raw_materials);

            setTargetRefs(targetRefs => Array(20).fill().map((_, i) => targetRefs[i] || React.createRef()))

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
        const interestCountries = [];
        // console.log(targetRefs);
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const intersectingDivId = entry.target.id;
            let country = intersectingDivId.slice(0, intersectingDivId.length - 1);
            let code = null;
            console.log(country);
            if (country === 'South Korea') country = 'Korea, Republic of'
            if (country === "Taiwan") country = "Taiwan, Province of China"
            if (~country.indexOf("Congo")) code = "CG"
            if (country === "United States") code = "US";
            if (country === "Cote d'Ivoire") code = "CI";         
            for (let i = 1; i <= 6; i++) {
                const s = `${i}. `
                if (~country.indexOf(s)) {
                    country = country.slice(s.length, country.length);
                    break;
                }
            }
            console.log(country);

            if (code === null && country !== undefined) code = getCode(country);

            if (code !== null) interestCountries.push(code);
            else console.log("BAD " + country);
          }
        });
        updateMap(interestCountries);
    };

    // useEffect(() => {
    //     console.log("display: " + displayCountries);
    // }, [displayCountries]);

    const updateMap = (countries) => {
        console.log(countries);
        // convert to the code
        if (mapRef.current !== null) { // might not work lol
            console.log(mapRef.current);
            mapRef.current.updateMapData(countries);
        } else {
            console.log('mapRef is null');
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
                    <Card image={Logo22} country="Manufacturers" />
                        {

                            Object.keys(manufacturers).map((key, index) => {
                                return (
                                    <div ref={targetRefs[index]} id={key + '1'}>
                                        <Card image={Logo23} country={key} desc={manufacturers[key]} />
                                    </div>
                                )
                            })
                        }
                    <Card image={Logo22} country="Raw Materials" />
                        {
                            Object.keys(rawMaterials).map((key, index) => {
                                return (
                                    <div ref={targetRefs[index + 10]} id={key + '2'}>
                                        <Card image={Logo23} country={key} desc={rawMaterials[key]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        ) : (
            <div className="loadingScreen">
                <h1 className="loading">Loading...</h1>
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