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

const SliderTextTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    font-size: 1.5em;
    font-weight: bold;$
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    position: relative;
    `

const SliderTextParagraph = styled.div`
    text-align: justify;
    font-size: 1em;
    `

const SliderImg = styled.div`
    width: 1000px;
    height: 500px;
    background-image: url("https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: filter 0.5s ease-in-out;; 
    }        
    `





function SlideOne():JSX.Element{
    return(
        <SliderContainer>
            <SliderTextWapper>
                    <SliderImg>
                    <SliderTextTitle>
                        <h1>
                            Projet
                        </h1>
                    </SliderTextTitle>
                        <SliderTextParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam euismod, nisi vel tincidunt congue, nisl nisl
                            aliquet nunc, eget egestas nisl nisl eu nisi.
                        </SliderTextParagraph>
                    </SliderImg>
            </SliderTextWapper>
        </SliderContainer>
    )
}

// TODO : faire un système pour rajouter des slides dans le composent app


export default SlideOne