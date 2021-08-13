import React, {useState, useRef,useEffect} from 'react';
import {Button} from '../Button'
import {
    HeroContainer,
    HeroWrapper,
    HeroContent,
    HeroImage,
    HeroSlider,
    HeroSlide,
    Arrow,
    SliderButtons,
    PrevArrow,
    NextArrow
} from './HeroElements'


const Hero = ({slides}) => {

    const [current,setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length -1 ? 0 : current + 1) )
        }
        timeout.current = setTimeout(nextSlide,3000)

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current,length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current - 1)
    }
    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }

    return (
       <HeroContainer>
           <HeroWrapper>
               {
                   slides.map((item,index)=> (
                       <HeroSlide key={index} >
                           {index === current && (
                                <HeroSlider>
                                <HeroImage src={item.image} alt={item.alt} />
                                <HeroContent>
                                    <h1>{item.titre} </h1>
                                    <Button 
                                    primary='true'
                                    to={item.path}
                                    css={
                                        `max-with:160px;
                                            justify-content:center
                                        `
                                    }
                                    >
                                        {item.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                                </HeroSlider>
                           )}
                       </HeroSlide>
                   ))
               }
               <SliderButtons>
                   <PrevArrow onClick={prevSlide} />
                   <NextArrow onClick={nextSlide} />
               </SliderButtons>
           </HeroWrapper>
       </HeroContainer>
    );
};



export default Hero;
