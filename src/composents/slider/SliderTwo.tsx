import react from "react"
import styled from "styled-components"

const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    `

const SliderTextWapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin : 0px 10px;
    `
function SlideTwo():JSX.Element{
    return(
        <SliderContainer>
            <SliderTextWapper>
                <h1>
                    Projet 2
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur tempor, nisl nunc
                    aliquet nunc, eget tincidunt nisl nunc eget nisl.
                </p>
            </SliderTextWapper>
        </SliderContainer>
    )
}

// TODO : faire un système pour rajouter des slides dans le composent app

export default SlideTwo