import { Link } from "react-router-dom";
import Banner from "./Banner";
import "../style/Contact.css";
import Footer from "./Footer";

function Contact() {
    
  return (
    <>
      <Banner/>
      <div className="container-Contact">
        <div className="LogoGitHub" onClick={() => {
        window.location.replace('https://github.com/Warheart-1');
        return null}}>
        </div>
       <a href="mailto:axel.selebran@hotmail.com"> 
        <div className="LogoHotMail">
        </div>
       </a>
        <div className="LogoPhoneNumber"onClick={() => {
        window.location.replace('https://www.linkedin.com/in/axel-selebran-935a1820b/');
        return null}}>
        </div>
      </div>
      <div className="contact-container">
        <h1 className="title-w">
          @Warheart-1
        </h1>
        <h1 className="title-w">
            axel.selebran@hotmail.com
        </h1>
        <h1 className="title-w">
            Axel Sélébran
        </h1>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;