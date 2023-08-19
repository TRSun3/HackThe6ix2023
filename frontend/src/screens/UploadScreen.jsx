import React from "react";
import '../styles/UploadScreen.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import bg from "../assets/globe.gif";
import centerLogo from "../assets/center-logo copy.png";
import earth from "../assets/temporary_shit_logo10.png"


export default function UploadScreen() {
  const bgStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    top:0,
    display: 'flex',
  };

  return (
    <>
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
    <img src={earth} alt="" className="earth"/>
    <div className="abtUsContainer" id="grad">
      <div className="aboutUs">
        <h1 className="aboutEco">About EcoLink Tech</h1>
        <p className="paragraph">At EcoLink Tech, we are driven by the mission to uncover the journey of every tech product. We believe that knowledge about the origin and materials of electronic devices is crucial for fostering a sustainable future. Our platform empowers users to trace the manufacturing and resource origins of their tech products, promoting transparency and informed choices. Join us in building a greener tomorrow, one connection at a time.</p>
      </div>
    </div>

    <Footer />
    </>
  );
}
