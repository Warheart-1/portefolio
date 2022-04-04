import "../style/CVAudioVisuel.css"
import SliderAudioVisuel from "./SliderAudioVisuel"
import styled from "styled-components"
import Footer from "./Footer"

function CVAudiolVisuel(): JSX.Element{

    const Title = styled.h1`
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
    `

    return( <>
            <Title>Compétences en motion design.</Title>
            <div id="contents">
                <div className="Progress-bar">
                    <div id="Premier">
                        <span className="title">Premier Pro</span>
                        <span className="content">80%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="After-Effect">
                        <span className="title">After Effect</span>
                        <span className="content">60%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="Photoshop">
                        <span className="title">Photoshop</span>
                        <span className="content">80%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="InDesign">
                        <span className="title">InDesign</span>
                        <span className="content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="Illustrator">
                        <span className="title">Illustrator</span>
                        <span className="content">40%</span>
                    </div>
                </div>
            </div>
            <SliderAudioVisuel/>
    </>)
}

export default CVAudiolVisuel