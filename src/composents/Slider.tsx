import { useEffect, useState, useRef } from "react";
import "../style/Slider.css";
import  projetList from "../data/projetList";

const Colors = ["https://cdn.discordapp.com/attachments/538463475765215306/959851259937050714/Screenshot_2022-04-02_175309.png", "#673de0", "#d17877"]
const delay = 2500

function Slider(){


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
            <h1 className="title-Project"> Mes Projets dans le développement.</h1>
            <div className="slider">
              <div
                className="slideSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {projetList.map(({id, name, color , backgrondImage, url}) => (
                    
                  <div
                    className="slide"
                    key={id}
                    style={{ backgroundImage: `url(${backgrondImage})` }}
                  >
                    <div className="slide-content">
                      <h1 style={{color: color}}>{name}</h1>
                      <a href={url}>Voir projet</a>
                    </div>
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

export default Slider;