import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import Footer from "../layout/Footer";
// import {gsap} from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

// 로딩 소스를 줄거임 함수 -> 클래스
// class: 함수의 집합체

class Main extends React.Component {
    state = {
        isLoading: true,
    }
    
    mainAnimation = () => {
      gsap.set(".main__inner", {opacity: 0})
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false});
            this.mainAnimation();
        },3000);
    }

    render(){
        const {isLoading} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                        <>
                            <Header />
                            <Contents>
                                <MainCont />
                            </Contents>
                            <Footer />
                        </>
                        )
                }
            </>
        )
    }
}





export default Main;