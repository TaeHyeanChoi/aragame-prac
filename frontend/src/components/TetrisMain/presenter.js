import React from "react";
import "./style.scss";

const TetrisMain = (props) => {
    return (
        <div className="main-wrapper">
            <canvas id="canvas" width='300' height='600'></canvas>
            <button className="button" id="playbutton">Play</button>
            <button className="button" id="pausebutton">Pause</button>
            <div id="score">점수 : 0</div>
        </div>
    )
}

export default TetrisMain