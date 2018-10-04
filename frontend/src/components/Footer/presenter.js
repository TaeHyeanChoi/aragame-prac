import React from "react";
import "./style.scss";

const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="footer-start">
                <div className="sparcs"><strong>SPARCS</strong></div>
            </div>
            <div className="footer-menu">
                <a href="https://sparcs.org">만든 사람들</a>
                <a href="https://sparcs.org">라이센스</a>
                <a href="https://sparcs.org">규칙</a>
            </div>
            <div className="footer-end">
                <div>문의: </div>
                <a href="mailto:aragame@sparcs.kaist.ac.kr">aragame@sparcs.kaist.ac.kr</a>
            </div>
        </div>
    )
}

export default Footer