/**
 * Item Impact
 *
 * Map.js
 *
 * Map
 * Reference: https://github.com/Allegra9/custom-world-map
 */

// Imports
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { VectorMap } from "react-jvectormap";
import ColorPicker from "../ColorPicker";
import styled from "@emotion/styled";
import { getName } from "country-list";

const Map = forwardRef(function Map(props, ref) {
  const [countriesCodesArray, setCountriesCodesArray] = useState([]);
  const [countriesNamesArray, setCountriesNamesArray] = useState([]);
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [titleSet, setTitleSet] = useState(false);
  const [color, setColor] = useState("#48aeef");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = () => {
    setTitleSet(true);
  };

  useImperativeHandle(ref, () => ({
    updateMapData: (newCountriesCodesArray) => {
      setCountriesCodesArray(newCountriesCodesArray);
    },
  }));

  const handleClick = (e, countryCode) => {
    if (countriesCodesArray.indexOf(countryCode) === -1) {
      setCountriesCodesArray([...countriesCodesArray, countryCode]);
    }
  };

  useEffect(() => {
    const getCountriesNamesList = () => {
      const list = countriesCodesArray.map((code) => getName(code));
      setCountriesNamesArray(list);
      makeMapDataStructure();
    };

    const makeMapDataStructure = () => {
      let obj = {};
      countriesCodesArray.forEach((countryCode) => (obj[countryCode] = 5));
      setData(obj);
    };

    getCountriesNamesList();
  }, [countriesCodesArray]);

  return (
    <VectorMap ref={ref}
      map={"world_mill"}
      backgroundColor="transparent"
      zoomOnScroll={false}
      containerStyle={{
        width: '100%',
        height: '100vh',
      }}
      onRegionClick={handleClick}
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "black",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0,
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: "pointer",
        },
        selected: {
          fill: "#2938bc",
        },
        selectedHover: {},
      }}
      regionsSelectable={false}
      series={{
        regions: [
          {
            values: data,
            scale: ["#146804", color],
            normalizeFunction: "polynomial",
          },
        ],
      }}
    />
  );
});

export default Map;
