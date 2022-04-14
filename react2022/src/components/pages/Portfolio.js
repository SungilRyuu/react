import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import ConTitle from "../includes/ConTitle";
import PortCont from "../includes/PortCont";
import ContContact from "../includes/ContContact";
import Footer from "../includes/Footer";


function Portfolio(){
    return (
        <>
            <Header />
            <Contents>
                <ConTitle title={["portfolio", "site"]}/>
                <PortCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;