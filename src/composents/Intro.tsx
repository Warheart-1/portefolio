import { useEffect, useRef } from "react"
import {gsap} from 'gsap'
import "../style/Intro.css"

function Intro (){
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        gsap.to(".box", {
            y: 50 ,
            //padding:"auto",
            duration: 2,
            delay:1,
            opacity:1,
            scrollTrigger: {
                trigger:".box",
                markers: true,
                start:"top center",
                end:"bottom 80px",
                scrub: true,
            }
        })
    })

    return(
        <><div className="box" ref={boxRef}>
            <div className="title">
                <h1>
                    SELEBRAN Axel
                </h1>
                <h2>
                    Développeur FullStacks Junior
                </h2>
            </div>
        </div>
        <div className="box2">
        </div>
        </>
    )
}



export default Intro