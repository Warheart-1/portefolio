import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import "../style/Parcours.css"
import Banner from "./Banner";

function Parcours() : JSX.Element{
    const imageEltheria = "https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png";

    const Timeline = styled.section`
    padding: 100px 0;
    position: relative;

    &:before {
        content: "";
        background: #7282d1;
        width: 4px;
        height: 95%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    `

    const TimelineContent = styled.div`
    position: relative;
	width: 45%;
	padding: 10px 30px;
	border-radius: 4px;
	background: #f5f5f5;
	box-shadow: 0 20px 25px -15px rgba(0, 0, 0, .3);

    &::after {
        content: '';
		position: absolute;
		border-style: solid;
		width: 0;
		height: 0;
		top: 30px;
		right: -15px;
		border-width: 10px 0 10px 15px;
		border-color: transparent transparent transparent #f5f5f5;
    }
    `

    const TimelineDate = styled.div`
        background: #FF4081;
        display: inline-block;
        color: white;
        padding: 10px;
        position: absolute;
        top: 0;
        right: 0;
    `

    const TimelineItem = styled.div`
        width: 100%;
        margin-bottom: 50px;
        
        &:nth-child(even) {
            .${TimelineContent} {
                float: right;
                padding: 50px 30px 10px 30px;
                .${TimelineDate} {
                    right: auto;
                    left: 0px;
                }
                &::after {
                    content: '';
                    position: absolute;
                    border-style: solid;
                    width: 0;
                    height: 0;
                    top: 30px;
                    left: -15px;
                    border-width: 10px 15px 10px 0;
                    border-color: transparent #f5f5f5 transparent transparent;        
                }
            }
        }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`
     const  TimelineImg = styled.div`
        width: 30px;
        height: 30px;
        background: #3750cb;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-top: 25px;
        margin-left: -15px;
    `

    const  ProjectLink = styled(Link)`
        background: #7282d1;
        color: white;
        padding: 8px 20px;
        text-transform: uppercase;
        font-size: 14px;
        margin-bottom: 20px;
        margin-top: 10px;
        display: inline-block;
        border-radius: 2px;
        box-shadow: 0 1px 3px -1px rgba(0, 0, 0, .6);
        &:hover, &:active, &:focus {
            background: darken(#7282d1, 10%);
            color: white;
            text-decoration: none;
        }
    `

    const TimelineImgHeader = styled.div`
        height: 200px;
        position: relative;
        margin-bottom: 20px;
        background-image: url(${imageEltheria});

        h1 {
            color: white;
            position: absolute;
            bottom: 5px;
            left: 20px;
        }
    `

    const TimelineImgContent = styled.div`
        .${TimelineImgHeader} {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), center center no-repeat
        background-size: cover;
    }`

    return(
        <>
        <Banner/>
            <Timeline>
                <div className="container">
                    <TimelineItem>
                        <TimelineImg/>
                        <div className="timeline-content js--fadeInLeft">
                            <h1>Bachelor Dév. FullStack</h1>
                            <TimelineDate>Octobre 2022</TimelineDate>
                            <p>
                                <strong>École IPSSI, MARNE-LA-VALLÉE</strong>
                            </p>
                            <ProjectLink to="/privacy-policy">Voir le projet</ProjectLink>
                        </div>
                    </TimelineItem>
                </div>
                <div className="container">
                    <TimelineItem>
                        <TimelineImg/>
                        <div className="timeline-content js--fadeInRight">
                            <TimelineImgHeader>
                                <h1>Projet Eltheria</h1>
                            </TimelineImgHeader>
                            <TimelineDate id="toTheRight">Juillet 2021 - Avril 2022</TimelineDate>
                            <p> 
                                <strong>Développement d'un jeu en réalitée augmentée</strong><br/>
                                <br/>
                                <br/>
                                Fait sous Unity.
                                <br/>
                                <br/>
                                En C# (avec le framework Unity).
                                <br/>
                                <br/>
                                Projet de fin d'étude.
                            </p>
                            <ProjectLink to="/privacy-policy2">Voir le projet</ProjectLink>
                        </div>
                    </TimelineItem>
                    <div className="container">
                        <TimelineItem>
                            <TimelineImg/>
                            <div className="timeline-content js--fadeInLeft">
                                <br/>
                                <h1>DUT MMI (Métiers du Multimédia et de l'Internet)</h1>
                                <TimelineDate>Septembre 2020 - Avril 2022</TimelineDate>
                                <p>
                                    <strong>UNIVERSITÉ GUSTASVE EIFFEL,IUT DE MARNE-LA-VALLÉE, ANTENNE DE MEAUX</strong>
                                    <br/>
                                    <br/>
                                    <br/>
                                    Apprentissage des langages du web et du développement mobile.
                                    <br/>
                                    <br/>
                                    Sécurité réseau sous Debian.
                                    <br/>
                                    <br/>
                                    Mise en situation de projet de groupe.
                                </p>
                                <ProjectLink to="/privacy-policy3">Voir le projet</ProjectLink>
                            </div>
                        </TimelineItem>
                    </div>    
                </div>
            </Timeline>
        </>
    )
}

export default Parcours