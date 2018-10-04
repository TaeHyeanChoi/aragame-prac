import React from "react";
import "./style.scss";

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="footer-start">
                <div className="sparcs"><strong>SPARCS</strong></div>
            </div>
            <div className="footer-menu">
                <a href="/">만든 사람들</a>
                <a href="/">라이센스</a>
                <a href="/">규칙</a>
            </div>
            <div className="footer-end">
                <div>문의: </div>
                <a>aragame@sparcs.kaist.ac.kr</a>
            </div>
        </div>
    )
}

export default Footer