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
                <div className="content" id="scorelines">클리어 라인 : 0</div>
                <div className="content" id="limittime">남은 시간 : 60</div>
            </div>

            <div className="week-rank-wrapper">
                <div className="title">주간 랭킹</div>
                <div id="week_1"></div>
                <div id="week_2"></div>
                <div id="week_3"></div>
                <div id="week_4"></div>
                <div id="week_5"></div>
            </div>

            <div className="total-rank-wrapper">
                <div className="title">전체 랭킹</div>
                <div id="total_1"></div>
                <div id="total_2"></div>
                <div id="total_3"></div>
                <div id="total_4"></div>
                <div id="total_5"></div>
                
            </div>
            
        </div>
    )
}

export default TetrisMain