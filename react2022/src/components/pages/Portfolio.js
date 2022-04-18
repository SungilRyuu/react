import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
import Footer from "../layout/Footer";


function Portfolio(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["portfolio", "site"]}/>
                <PortCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;