import "../style/CVAudioVisuel.css"
import Banner from "./Banner"

function CVAudiolVisuel(): JSX.Element{
    return( <>
        
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
    </>)
}

export default CVAudiolVisuel