import React from "react";
import {Link} from 'react-router-dom';

function Side(){
    return (
        <div id="side">
            <Link to="/" className="side__title">Music Musik</Link>
            <Link to="/mypage" className="side__nick">밤하늘의 펄</Link>
            <ul className="side__menu">
                <li><Link to="/today">오늘의 음악</Link></li>
                <li><Link to="/top100">TOP 100</Link></li>
                <li><Link to="/recent">최신 음악</Link></li>
                <li><Link to="/stored">나의 보관함</Link></li>
                <li><Link to="/algorithm">알고리즘 추천</Link></li>
                <li><Link to="/mood">온도, 습도, 분위기</Link></li>
            </ul>
            <ul className="side__playlist">
                <li><Link to="/playlist1">플레이리스트1</Link></li>
                <li><Link to="/playlist2">플레이리스트2</Link></li>
                <li><Link to="/playlist3">플레이리스트3</Link></li>
            </ul>
            <ul className="side__info">
                <li><a href="#">서비스 소개</a></li>
                <li><a href="#">사용방법</a></li>
                <li><a href="#">저작권 안내</a></li>
            </ul>
        </div>
    );
}

export default Side;