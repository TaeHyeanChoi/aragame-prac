import React from "react";
import "./style.scss";
import Ionicons from "react-ionicons"

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
                    <a href="/"><Ionicons icon="md-person-add" fontSize="24px"/></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar