import React from "react";
import "./style.scss";

const TetrisMain = (props) => {
    return (
        <div className="main-wrapper">
            <canvas id="canvas" width='300' height='600'></canvas>
            
            <div className="game-wrapper">
                <button className="button" id="playbutton">&#62; Play &#60;</button>
                <button className="button" id="pausebutton">&#62; Pause &#60;</button>
            </div>

            <div className="score-wrapper">
                <div className="title">내 점수</div>
                <div className="content" id="score">점수 : 0</div>
                <div className="content" id="high-score">최고점수 : 0</div>
            </div>

            <div className="week-rank-wrapper">
                <div className="title">주간 랭킹</div>
                <div className="content">1등 : 0000점 (abcdfef)</div>
                <div className="content">2등 : 0000점 (abcdfef)</div>
                <div className="content">3등 : 0000점 (abcdfef)</div>
                <div className="content">4등 : 0000점 (abcdfef)</div>
                <div className="content">5등 : 0000점 (abcdfef)</div>
            </div>

            <div className="total-rank-wrapper">
                <div className="title">전체 랭킹</div>
                <div className="content">1등 : 0000점 (abcdfef)</div>
                <div className="content">2등 : 0000점 (abcdfef)</div>
                <div className="content">3등 : 0000점 (abcdfef)</div>
                <div className="content">4등 : 0000점 (abcdfef)</div>
                <div className="content">5등 : 0000점 (abcdfef)</div>
                
            </div>
            
        </div>
    )
}

export default TetrisMain