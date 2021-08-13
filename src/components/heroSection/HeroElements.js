import styled from 'styled-components'

export const InfoContainer = styled.div`
    color:#fff;
    background:  ${({lightBg}) => (lightBg ? '#f9f9f9' : '##c7c7c7')};

    @media screen and (max-width: 768px){
        padding:  10px 0;
        max-height: 1400px;
        
    }

    @media screen and (max-width: 580px){
        margin-top: 0px;
        max-height: 1400px;
        margin-bottom:100px;
    }

    @media screen and (width: 540px){
        
        margin-bottom:100px;
    }

    
`

export const InfoWrapper = styled.div`
       display:grid;
       z-index: 1;
       max-height: 1400px;
       width: 100%;
       max-width:1200px;
       margin-right: auto; 
       margin-left:auto;
       padding: 0 24px;
       justify-content: center;
`

export const InfoRow =styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
       grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2' ` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
 
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2; 

    @media screen and (max-width: 400px){
       padding: 0 8px;
       width:330px;
   }
`

export  const TextWrapper = styled.div`
    max-width: 550px;
    padding-top:0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #0e0430;
    font-size:16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px
`

export const Heading = styled.h1`
    
    margin-bottom: 22px;
    font-size: 48px;
    text-align: left;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#e6731c;' : '#0e0430')};

    @media screen and (max-width: 480px){
        font-size:22px
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#fbf000' : "#1a1359")};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`

export const ImgWrap = styled.div`
    max-width: 775px;
    height:100%;
    transition: box-shadow 0.5s;
    will-change: transform;
    padding:5px;
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
    color: #000;

`

export const Img = styled.img`
    width:90%;
    margin: 0 0 10px 0;
    padding-right: 0;
`