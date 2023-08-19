/**
 * Item Impact
 *
 * ColorPicker.js
 *
 * Color Picker for map
 * Reference: https://github.com/Allegra9/custom-world-map
 */

// Imports
import React from "react";
import { GithubPicker } from "react-color";

const ColorPicker = ({ color, handleColorChange }) => (
  <GithubPicker color={color} onChangeComplete={handleColorChange} />
);
export default ColorPicker;
