import React from "react";
import "./style.scss";

const NavBar = (props) => {
    return (
        <div className="NavBar-wrapper">
            <div className="NavBar-logo">
                <a href="/">ARA GAME</a>
            </div>
            <div className="NavBar-menu">
                <div className="NavBar-start">
                    <a href="/">아라</a>
                    <a href="/">테트리스</a>
                </div>
                <div className="NavBar-end">

                </div>
            </div>
        </div>
    )
}

export default NavBar