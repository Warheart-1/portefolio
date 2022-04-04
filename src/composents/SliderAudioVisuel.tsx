import { useEffect, useState, useRef } from "react";
import "../style/Slider.css";
import projetAudioVisuelList from "../data/projetAudioVisuelList";

const Colors = ["https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png", "#673de0", "#d17877"]
const delay = 10000

function SliderAudioVisuel(){


    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === Colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {

        };
      }, [index]);

        return (
          <>
            <h1 className="title-Project"> Mes Projets dans le motion design.</h1>
            <div className="slider">
              <div
                className="slideSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {projetAudioVisuelList.map(({id, backgroundImage}) => (
                    
                  <div
                    className="slide-audio-visuel"
                    key={id}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                  >
                  </div>
                ))}
              </div>
        
              <div className="slideDots">
                {Colors.map((_, idx) => (
                  <div key={idx} className={`slideDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}></div>
                ))}
              </div>
            </div>
          </>
          )
        
}

export default SliderAudioVisuel;