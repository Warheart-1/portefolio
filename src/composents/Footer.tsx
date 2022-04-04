import { Link } from "react-router-dom"
import "../style/Footer.css"

function Footer(): JSX.Element {
    return(
        <div className="nav-bar-footer">
            <Link to="/"><h1>Porte-Folio</h1></Link>
            <div className="Link-resume">
                <Link className="link-page" to="/CV"> Mes compétences</Link>
                <Link className="link-page" to="/Parcours"> Mon parcours</Link>
                <Link className="link-page" to="/Contact"> Contact</Link>
            </div>
            <div className="logo">
            </div>
        </div>
    )
}

export default Footer