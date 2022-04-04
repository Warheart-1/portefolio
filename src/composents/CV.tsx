import "../style/CV.css"
import Banner from "./Banner"
import Slider from "./Slider"
import styled from "styled-components"


function CV (): JSX.Element {
    const Title = styled.h1`
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
    `

    return (
        <>
        <Banner/>
            <Title>Compétences en développement web.</Title>
            <div id="contents">
                <div className="Progress-bar">
                    <div id="HTML">
                        <span className="title">HTML</span>
                        <span className="content">100%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="CSS">
                        <span className="title">CSS</span>
                        <span className="content">80%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="JS">
                        <span className="title">JavaScript</span>
                        <span className="content">60%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="TS">
                        <span className="title">TypeScript</span>
                        <span className="content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="jQuery">
                        <span className="title">jQuery</span>
                        <span className="content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="React">
                        <span className="title">React</span>
                        <span className="content">40%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="PHP">
                        <span className="title">PHP</span>
                        <span className="content">60%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="MySQL">
                        <span className="title">MySQL</span>
                        <span className="content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="Git">
                        <span className="title">Git</span>
                        <span className="content">60%</span>
                    </div>
                </div>
            </div> 
            <Slider/>         
        </>
    )
}

export default CV