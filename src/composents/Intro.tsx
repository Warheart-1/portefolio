import { useEffect, useRef } from "react"
import "../style/Intro.css"
import { Link } from "react-router-dom"

function Intro (): JSX.Element {

    return(
        <><div className="box">
            <div className="title">
                <h1>
                    SELEBRAN Axel
                </h1>
                <h2>
                    Développeur FullStacks Junior
                </h2>
            </div>
        </div>
        <div className="box2">
            <Link to="/CV">CV</Link>
        </div>
        </>
    )
}



export default Intro