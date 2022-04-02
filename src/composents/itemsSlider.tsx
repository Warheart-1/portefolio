import * as React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";

const SCarouselWrapper = styled.div`
  display: flex;
`;

interface ISlider {
    active?: boolean;
}

const SwitchSlider =  styled.div<ISlider>`
    flex: 0 0 auto;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    width: 100%;
    `
interface ISliderProps {
    currentsSlider: number;
}

const SliderSlides = styled.div<ISliderProps>`
    display: flex;
    ${props => props.currentsSlider === 0 && css`
        transform: translateX(-${props.currentsSlider * 100 }%);
        `}
        transition: 0.5s ease-in-out;
        `

interface IProps {
  children: JSX.Element[];
}

const ItemsSlider = ({ children }: IProps) => {
    const [currentSlide, setSlide] = useState(0);

  const activeSlide = children.map((slide, index)=> (
    <>
    <SwitchSlider key={index} active={currentSlide === index}>
      {slide}
    </SwitchSlider>
    </>
  ));

  return (
    <div>
      <SCarouselWrapper>
        <SliderSlides currentsSlider={currentSlide}>
        {activeSlide}
        </SliderSlides>
      </SCarouselWrapper>
      <button
        onClick={() => {
          setSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          setSlide((currentSlide + 1) % activeSlide.length);
        }}
      >
        Right
      </button>
    </div>
  );
};

export default ItemsSlider;