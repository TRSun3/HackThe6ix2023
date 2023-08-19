import React from "react";
import "../styles/UploadScreen.css";
import NavBar from "../components/NavBar";
import bg from "../assets/globe.gif";
import centerLogo from "../assets/center-logo copy.png";
import medias from "../assets/temporary_shit_logo8.png";
import earth from "../assets/temporary_shit_logo10.png";

export default function UploadScreen() {
  const [formData, setFormData] = React.useState({ item: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!window.confirm("Continue to results")) {
      return;
    }
    // Code for entering the results page
  };

  const bgStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
    top: 0,
  };

  return (
    <>
      <div style={bgStyles}>
        <NavBar />
        <div className="upload-container">
          <img src={centerLogo} alt="" className="center-logo" />
          <div className="slogan">
            Tracing Tech&nbsp;
            <div className="origin-text">Origin</div>, Nurturing&nbsp;
            <div className="sustainability-text">Sustainability</div>
          </div>
          <label>
            <br></br>
            <b style={{ color: "white" }}>Enter your item here: </b>
          </label>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    style={{ width: "20em" }}
                    type="string"
                    id="item"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    style={{ width: "3em" }}
                    type="button"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Go
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <img src={earth} alt="" className="earth" />
      <div className="abtUsContainer" id="grad">
        <div className="aboutUs">
          <h1 className="aboutEco">About EcoLink Tech</h1>
          <p className="paragraph">
            At EcoLink Tech, we are driven by the mission to uncover the journey
            of every tech product. We believe that knowledge about the origin
            and materials of electronic devices is crucial for fostering a
            sustainable future. Our platform empowers users to trace the
            manufacturing and resource origins of their tech products, promoting
            transparency and informed choices. Join us in building a greener
            tomorrow, one connection at a time.
          </p>
        </div>
      </div>
      <div className="footer">
        <p className="footerText">© EcoLink Tech 2023</p>
        <p className="footerText1">ask@ecotechlink.com</p>
        <img src={medias} alt="" className="socialMedia" />
      </div>
    </>
  );
}
