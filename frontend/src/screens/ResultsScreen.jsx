import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import '../styles/ResultsScreen.css';

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/iphone")
        .then((response) => {
            console.log(response);
            console.log(response.data.manufacturers);
            console.log(response.data.raw_materials);
            setManufacturers(response.data.manufacturers);
            setRawMaterials(response.data.raw_materials);
            isLoading(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <>
        <div className="background">
        <NavBar />
            {loading ? (
                <div>
                    <h1>Results</h1>
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

