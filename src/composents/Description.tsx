import "../style/Description.css";
import Banner from "./Banner";
import Footer from "./Footer";

function Description(){
    return(
        <>
            <div className="presentation">
                <div className="presentation-title">
                    <h1>Introduction :</h1>
                </div>
                <div className="presentation-content">
                    
                    <div className="text-presentation">
                        <div className="img-box">
                        </div>
                        <p className="text">
                            Je suis un développeur FullStack junior, passionné par le développement web et le design.
                            J'ai, actuellement, finis mon DUT MMI à l'université de Meaux.
                            A la rentré de septembre 2022, je serai à l'école <a href="https://ecole-ipssi.com/">IPSSI</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Description