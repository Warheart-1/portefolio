import styled from "styled-components"

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
function SlideOne():JSX.Element{
    return(
        <SliderContainer>
            <SliderTextWapper>
                <h1>
                    Projet Eltheria
                </h1>
                <img src="https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png" alt="projet Eltheria"></img>
            </SliderTextWapper>
        </SliderContainer>
    )
}

// TODO : faire un système pour rajouter des slides dans le composent app

export default SlideOne