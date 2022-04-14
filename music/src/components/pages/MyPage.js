import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Play from "../includes/Play";

function MyPage(){
    return (
        <>
            <Side />
            <Contents name="마이 페이지"/>
            <Play />
        </>
    );
}

export default MyPage;