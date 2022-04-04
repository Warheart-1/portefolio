import "../style/Intro.css"
import { Link } from "react-router-dom"

function Intro (): JSX.Element {

    return(
        <>
            <div className="box">
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
                <Link className="link-page" to="/CV"> Mes compétences</Link>
                <Link className="link-page" to="/Parcours"> Mon parcours</Link>
                <Link className="link-page" to="/Contact"> Contact</Link>
            </div>
        </>
    )
}



export default Intro