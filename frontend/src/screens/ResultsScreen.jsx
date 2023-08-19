import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ResultsScreen() {
    const [manufacturers, setManufacturers] = useState(null);
    const [rawMaterials, setRawMaterials] = useState(null);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/iphone")
        .then((response) => {
            console.log(response);
            setManufacturers(response.data.manufacturers);
            setRawMaterials(response.data.rawMaterials);
            isLoading(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <>
            {loading ? (
                <div>
                    <h1>Results</h1>
                    {
                        Object.keys(manufacturers).map((key) => {
                            console.log(key);
                            return (
                            <div>
                                <h2>{key}</h2>
                                <h3>{manufacturers[key]}</h3>
                            </div>
                        )})
                    }

                    {
                        Object.keys(rawMaterials).map((key) => {
                            console.log(key);
                            return (
                            <div>
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
        </>
    );
}

