import React from 'react'
import "./CompanyElement.css"
import CardCompany from './CardCompany';
import {dataCompany} from './dataCompany'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e0430",borderRadius:"10px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0e0430",borderRadius:"10px" }}
      onClick={onClick}
    />
  );
}

const CompanySection = () => {
    
        const settings = { 
          dots: false,
          infinite: true,
          speed: 2000,
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
            <div className="company__section">
                <div >
                                {/* <Button  
                                       buttonSize='btn--medium'
                                        className="btn"
                                       buttonStyle='btn--primary'    
                                     >
                                        Voir plus
                                </Button>   */ }   
                        <div >
                        <Slider {...settings}>
                              { 
                                dataCompany.map(company =>
                                <CardCompany key={company.id} {...company}  />)
                               }
                      </Slider>
                         
                          
                        </div>
                </div>
            </div>
    )
}

export default CompanySection
