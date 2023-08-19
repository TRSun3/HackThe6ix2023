import React from "react";
import '../styles/UploadScreen.css';
import NavBar from "../components/NavBar";
import bg from "../assets/globe.jpg";
import centerLogo from "../assets/center-logo.png";

export default function UploadScreen() {
  const bgStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={bgStyles}>
      <NavBar />
      <div className='upload-container'>
        <img src={centerLogo} alt="" className="center-logo"/>
        <div className="slogan">Tracing Tech&nbsp;
          <div className="origin-text">Origin</div>
          , Nurturing&nbsp;
          <div className="sustainability-text">Sustainability</div>
        </div>
        <div className="upload-text">Upload your file here</div>
      </div>
    </div>
  );
}
