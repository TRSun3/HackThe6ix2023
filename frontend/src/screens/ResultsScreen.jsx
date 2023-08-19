import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import '../styles/ResultsScreen.css';
import { useLocation } from "react-router";

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [device, setDevice] = useState(null);
    const [loading, isLoading] = useState(false);
    const location = useLocation();
    const acceptable_devices = ['iphone', 'android']


    useEffect(() => {
        const fetchData = async () => {
            console.log(location.state);
            setDevice(location.state);

            if (!acceptable_devices.includes(location.state)) {
                setDevice("Invalid Device");
                isLoading(true);
                return;
            }
        
            const response = await axios.get("http://localhost:5000/api/iphone");
            setManufacturers(response.data.manufacturers);
            setRawMaterials(response.data.raw_materials);
            isLoading(true);
        };

        
        fetchData();
    }, []);


    return (
        <>
        <div className="background">
        <NavBar />
            {loading ? (
                <div>
                    <h1>Results {device}</h1>
                    { manufacturers && 
                        Object.keys(manufacturers).map((key) => {
                            console.log(key);
                            return (
                            <div key={key + '1'}>
                                <h2>{key}</h2>
                                <h3>{manufacturers[key]}</h3>
                            </div>
                        )})
                    }

                    { rawMaterials && 
                        Object.keys(rawMaterials).map((key) => {
                            console.log(key);
                            return (
                            <div key={key + '2'}>
                                <h2>{key}</h2>
                                <h3>{rawMaterials[key]}</h3>
                            </div>
                        )})
                    }
                </div>
            ) : (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}

        </div>
        
        </>
    );
}

