import React from "react";
import Side from "../includes/Side";
import Contents from "../includes/Contents";
import Play from "../includes/Play";

function Today(){
    return (
        <>
            <Side />
            <Contents name="오늘의 페이지"/>
            <Play />
        </>
    );
}

export default Today;