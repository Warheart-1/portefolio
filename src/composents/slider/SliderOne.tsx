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
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    display: none;
    `

const SliderImg = styled.div`
    width: 1000px;
    height: 500px;
    background-image: url("https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.4s ease-in-out; 
    &:hover{
        ${SliderTextTitle}{
            display: block;
        }
        opacity: 0.5; 
    }        
    `



function SlideOne():JSX.Element{
    return(
        <SliderContainer>
            <SliderTextWapper>
                <SliderImg>
                    <SliderTextTitle>
                        Projet 1
                    </SliderTextTitle>
                </SliderImg>
            </SliderTextWapper>
        </SliderContainer>
    )
}

// TODO : faire un système pour rajouter des slides dans le composent app


export default SlideOne