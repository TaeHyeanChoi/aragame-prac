import React, {Component} from 'react';
import "./style.scss"
import NavBar from "../../NavBar/";
import TetrisMain from "../../TetrisMain";
import Footer from "../../Footer";
import axios from 'axios'

class Tetris extends Component {

    componentDidMount() {
        function loadAllRank() {
            axios.get('http://localhost:9000/highscores/all')
                .then((result) => {
                    console.log(result)
                    for (let i = 0; i < 5; i++) {
                        let username = result.data[i].username
                        let bestscore = result.data[i].bestscore
                        let string = (i+1) + ": " + bestscore + " (" + username + ")"
                        document.getElementById("total_" + (i+1)).innerHTML = string;
                    }

                });
            
        }
        function loadWeekRank() {
            axios.get('http://localhost:9000/highscores/week')
                .then((result) => {
                    console.log(result)
                    for (let i = 0; i < 5; i++) {
                        if (!result.data[i]) {
                            continue
                        }
                        let username = result.data[i].username
                        let bestscore = result.data[i].bestscore
                        let string = (i+1) + ": " + bestscore + " (" + username + ")"
                        document.getElementById("week_" + (i+1)).innerHTML = string;
                    }

                });
        }
        const script = document.createElement("script");
        script.src = "http://localhost:9000/tetris.js"
        script.async = true;
        document.body.appendChild(script);
        loadWeekRank();
        loadAllRank(); 
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