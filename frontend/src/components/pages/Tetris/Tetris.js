import React, {Component} from 'react';
import "./style.scss"
import NavBar from "../../NavBar/";
import TetrisMain from "../../TetrisMain";
import Footer from "../../Footer";

class Tetris extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "http://localhost:9000/tetris.js"
        script.async = true;
        document.body.appendChild(script);
    }

    
    render() {
        return (
            <div className="all-contents">
                <div className="header"><NavBar/></div>
                <div className="side1"></div>
                <div className="main"><TetrisMain/></div>
                <div className="side2"></div>
                <div className="footer"><Footer/></div>
            </div>
        )
        
    }
}

export default Tetris;