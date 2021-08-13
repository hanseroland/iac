import React,{useState,useEffect}  from 'react'
import {
    Column2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
 } from './FormElements';
import FormContact from './FormContact';




const FormSection = (props) => {

    const [viewJob, setViewJob] = useState(false)
    const [emplois, setEmplois] = useState([]);
   
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id} >
                    <InfoWrapper>
                        <InfoRow  imgStart={props.imgStart} >   
                            <Column1>  
                              <TextWrapper>
                                  <TopLine  >{props.topLine}</TopLine>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                  <Subtitle  darkText={props.darkText}>
                                    <ul>
                                        <li>{props.description1}</li>
                                        <li>{props.description2}</li>
                                        <li>{props.description3}</li>
                                        <li>{props.description4}</li>
                                    </ul>
                                  </Subtitle>                                 
                              </TextWrapper>
                            </Column1> 
                            <Column2>
                          {/*  <Scrollbars autoHeight autoHeightMax = {420}>*/}
                                
                                <ImgWrap>  
                                   <FormContact/>
                                </ImgWrap>
                              {/*  </Scrollbars>*/}
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FormSection
