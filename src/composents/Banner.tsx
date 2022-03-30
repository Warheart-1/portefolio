import { Link } from "react-router-dom"
import "../style/Banner.css"

function Banner(): JSX.Element {
    return(
        <div className="nav-bar">
            <Link to="/"><h1>Porte-Folio</h1></Link>
            <div className="search-bar">
                <input type="text" placeholder="Rechercher.."/>
            </div>
            <div className="logo">
                <div className="icon">
                    Axel SELEBRAN
                </div>
            </div>
        </div>
    )
}

export default Banner