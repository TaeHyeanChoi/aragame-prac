import React, {Component} from 'react';
import "./style.css"

class Tetris extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "http://143.248.234.13:9000/tetris.js"
        script.async = true;
        document.body.appendChild(script);
    }

    
    render() {
        return (
            <div>
                <canvas id="canvas" width='300' height='600'></canvas>
                <button className="button" id="playbutton">Play</button>
                <button className="button" id="pausebutton">Pause</button>
                <div id="score">점수 : 0</div>
            </div>
        )
        
    }
}

export default Tetris;