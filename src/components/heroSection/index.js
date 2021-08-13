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
    BtnWrap

 } from './HeroElements';
import { ButtonLink } from '../ButtonLinkStyle';
import { Fragment } from 'react';
import CartComponent from '../carteActu/CartComponent'
import { JssProvider } from 'react-jss';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';



const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
}); 

const HeroSection = (props) => {

   const {data} =  props
    return ( 
        <>
         <JssProvider generateClassName={generateClassName}>
            <MuiThemeProvider
            theme={createMuiTheme({
                typography: {
                useNextVariants: true
                },
                overrides: CartComponent.getTheme(muiBaseTheme)
            })}
            >
            <InfoContainer lightBg={props.lightBg} > 
                    <InfoWrapper>
                        <InfoRow >   
                            <Column1>
                              <TextWrapper>
                                  <TopLine>{props.topLine}</TopLine>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                  <Subtitle  darkText={props.darkText}>
                                   
                                        {props.description}
                                       
                                   
                                 </Subtitle>
                                  <BtnWrap>
                                   
                                        <ButtonLink to={props.path} > 
                                            Voir plus
                                        </ButtonLink> 
                                                                               
                                        
                                  </BtnWrap>
                              </TextWrapper>
                            </Column1> 
                            <Column2>
                          
                                
                                <ImgWrap>  
                                    <Grid container  spacing={3} >
                                      {data.slice(0,4).map((item,index) => (
                                        <Grid item lg={6} xs={12}  key={index}>
                                                <CartComponent   {...item} />    
                                        </Grid>)
                                        )}
                                    </Grid>
                                    {/*data.slice(0,2).map((item,index) => (
                                        <Fragment  key={index}>
                                                <CartComponent   {...item} />    
                                        </Fragment>)
                                    )*/}
                                </ImgWrap>
                             
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
            </MuiThemeProvider>
    </JssProvider>
        </>
    )
}

export default HeroSection
