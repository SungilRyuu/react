import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import ReferCont from "../includes/ReferCont";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import {gsap} from "gsap";




class Reference extends React.Component {
    state = {
        isLoading: true,
    }

    getSite = () => {
        setTimeout(() => {
            gsap.to("#header", {
              duration:0.8, 
              top: 0, 
              ease: "sine.out"
            });
            gsap.to("#footer", {
              duration:0.8, 
              bottom: 0,
              ease: "sine.out",
              delay: 0.3
            });
            gsap.to(".cont__title h1", {
                duration: 1,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out"
            })
            gsap.to(".refer__inner h2", {
                duration: 1,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "back.out"
            })
            gsap.to(".refer__inner table", {
              duration:1, 
              x: 0,
              opacity: 1, 
              delay: 1.5,
              ease:"back.out(1.7)"
            });
        },)
    }

    getAbout = () => {
        setTimeout(() => {
            console.log("두 번째 시작");
            this.setState({isLoading: false});
            this.getSite();
        }, 1000)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫 번째 시작");
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "var(--light_bg)"
            this.getAbout();
        },2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                <Loading color="light" />
                ):(<>
                    <Header color="light"/>
                    <Contents>
                        <Title title={[ "REFERENCE", "book"]} color="light" />
                        <ReferCont color="light" />
                    </Contents>
                    <Footer  color="light"/>
                </>
                )
                }
            </>
        )
    }
}

// function Reference(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents>
//                 <Title title={[ "REFERENCE", "book"]} color="light" />
//                 <ReferCont color="light" />
//             </Contents>
//             <Footer  color="light"/>
//         </>
//     )
// }

export default Reference;