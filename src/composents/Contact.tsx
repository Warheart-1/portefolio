import { Link } from "react-router-dom";
import styled from "styled-components";
import Banner from "./Banner";
import ".../style/Contact.css";

function Contact() {
    
  return (
    <>
      <Banner/>
      <div className="container">
        <div className="LogoGitHub"><Link to="/privacy-policy3"></Link></div>
        <div className="LogoHotMail"><Link to="/privacy-policy4"></Link></div>
        <div className="LogoPhoneNumber"><Link to="/privacy-policy3"></Link></div>
      </div>
    </>
  );
}

export default Contact;