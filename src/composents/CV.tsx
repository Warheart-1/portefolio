import "../style/CV.css"
import Banner from "./Banner"


function CV (): JSX.Element {
    return (
        <>
        <Banner/>
            <div id="contents">
                <div className="Progress-bar">
                    <div id="HTML">
                        <span className="HTML-title">HTML</span>
                        <span className="HTML-content">100%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="CSS">
                        <span className="CSS-title">CSS</span>
                        <span className="CSS-content">80%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="JS">
                        <span className="JS-title">JavaScript</span>
                        <span className="JS-content">60%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="TS">
                        <span className="TyepScript-title">TypeScript</span>
                        <span className="TyepScript-content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="jQuery">
                        <span className="jQuery-title">jQuery</span>
                        <span className="jQuery-content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="React">
                        <span className="React-title">React</span>
                        <span className="React-content">30%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="PHP">
                        <span className="PHP-title">PHP</span>
                        <span className="PHP-content">60%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="MySQL">
                        <span className="MySQL-title">MySQL</span>
                        <span className="MySQL-content">50%</span>
                    </div>
                </div>
                <div className="Progress-bar">
                    <div id="Git">
                        <span className="Git-title">Git</span>
                        <span className="Git-content">60%</span>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default CV