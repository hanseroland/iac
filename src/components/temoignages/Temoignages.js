import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Ptext from './Ptext';
import SectionTitre from '../titre/SectionTitre';
import temoignages from '../../data/temoignages';


const TemoignageSectionStyles = styled.div`
  overflow-x: hidden;
  text-align: center;
  //background-color: #f2eeee;
  .temoignage__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
   
  }
  .temoignage__info {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 2rem;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);

  }
  .temoignage__desc {
    .para {
      text-align: center;
    }
  }
  .temoignage__name {
    margin-top: 4rem;
    font-size: 2.2rem;
    color: #0e0430;
  }
  .temoignage__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
    color: #0e0430;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
   
    svg {
      width: 30px;
      pointer-events: none;
      
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      //background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
      background-color: #0e0430;
      color: white;
      
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
    
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;


const Temoignages = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = temoignages[activeIndex];
  
    const handleNext = () => {
      if (activeIndex >= temoignages.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((oldIndex) => oldIndex + 1);
      }
    }

    const handlePrev = () => {
      if (activeIndex === 0) {
        setActiveIndex(temoignages.length - 1);
      } else {
        setActiveIndex((oldIndex) => oldIndex - 1);
      }
    }



    return (
        <TemoignageSectionStyles>
        <div className="container">
          <SectionTitre 
            subheading="see what our clients say about us"
            heading="Témoignages"
          />
          <div className="temoignage__wrapper">
            <SwitchTransition component={null}>
              <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
                <div className="temoignage__info">
                  <div className="temoignage__desc">
                    <Ptext>{activeSlide.desc}</Ptext>
                  </div>
                  <h2 className="temoignage__name">{activeSlide.name}</h2>
                  <p className="temoignage__title">
                    {activeSlide.title}, <br /> {activeSlide.org}
                  </p>
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
  
          <div className="arrows">
            <div
              className="prev"
              onClick={handlePrev}
              role="button"
              tabIndex={0}
              onKeyDown={handlePrev}
            >
              <MdArrowBack />
            </div>
            <div
              className="next"
              onClick={handleNext}
              role="button"
              tabIndex={0}
              onKeyDown={handleNext}
            >
              <MdArrowForward />
            </div>
          </div>
        </div>
      </TemoignageSectionStyles>
    )
}

export default Temoignages
