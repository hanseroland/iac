import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom';
import {IoMdArrowRoundForward} from 'react-icons/io'
import { IoArrowBack, IoArrowForward} from 'react-icons/io5'


export const Section = styled.section`
    margin-top: -100px;
    width: 100%;
    height: 100%;
   // padding: 4rem 0rem;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;
    color: ${({darkText}) => (darkText ? '#fbf000' : "#1a1359")};
`

export const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) - 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;
    background-color: #f9f9f9;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${ ({reverse}) =>  (reverse ? '2' : '1') };

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem,6vw, 2rem);
        color:#0e0430
    }
    p {
        margin-bottom: 2rem;
    }

`;

export const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2' ) };
    display: flex;
    justify-content: center ;
    align-items: center;
    

    @media screen and (max-width: 768px){
        order: ${ ({reverse}) =>  (reverse ? '2' : '1') };
    }

    img {
        width: 80%;
        height: 60%;
        object-fit: cover;
        border-radius: 30px;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`;