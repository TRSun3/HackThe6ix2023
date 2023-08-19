import React from "react";
import '../styles/Footer.css';
import medias from "../assets/temporary_shit_logo8.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerTexts">
                <div>© EcoLink Tech 2023</div>
                <div>ask@ecotechlink.com</div>
            </div>
            <img src={medias} alt="" className="socialMedia"/>
        </div>
    );
}
