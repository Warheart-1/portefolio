import "../style/Banner.css"

function Banner(): JSX.Element {
    return(
        <div className="nav-bar">
            <h1>Porte-Folio</h1>
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