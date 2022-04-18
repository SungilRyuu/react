import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ContContact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";
import Footer from "../layout/Footer";


function About(){
    return (
        <>
            <Header color="light" />
            <Contents >
                <Title title={["about", "me"]} color="light"/>
                <AboutCont color="light" />
            <ContContact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default About;