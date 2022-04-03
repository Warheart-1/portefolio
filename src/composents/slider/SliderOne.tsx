import styled from "styled-components" 
import "../../style/Slider.css"      

const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `

const SliderTextWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin : 0px 10px;
    `

const SliderTextTitle = styled.h1`
    position: absolute;
    margin: auto;
    font-size: 1.5em;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;
    `

const SliderImg = styled.div`
    width: 1000px;
    height: 500px;
    background-image: url("https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: filter 0.5s ease-in-out;; 
    &:hover{
        filter: blur(5px);
        ${SliderTextTitle}{
            visibility: visible;
            opacity: 1;
        }
    }        
    `



function SlideOne():JSX.Element{
    return(
        <SliderContainer>
            <SliderTextWapper>
                <SliderTextTitle>
                    Slider One
                </SliderTextTitle>
                <SliderImg>
                    
                </SliderImg>
            </SliderTextWapper>
        </SliderContainer>
    )
}

// TODO : faire un système pour rajouter des slides dans le composent app


export default SlideOne