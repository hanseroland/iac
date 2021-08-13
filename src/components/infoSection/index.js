import React from 'react'
import {
    Section,
    Container,
    ColumnLeft,
    ColumnRight,
    Subtitle
} from './InfoElements'
import {Button} from '../Button'
import { motion } from "framer-motion"


const InfoSection  = (props) => {

    

    const afficheBtn = (display) => {
        if(display){
            return  <Button primary={true}  to="/apropos" > {props.buttonLabel} </Button>
        }
    }
    return (
        <>
           <Section>
               <Container>
                   <ColumnLeft>
                       <h1 >{props.heading}</h1>
                      <Subtitle  darkText={props.darkText}>     
                            {props.paragrapheOne}     
                      </Subtitle>
                       {afficheBtn(props.display)}
                   </ColumnLeft>
                   <ColumnRight  reverse={props.reverse}  >
                      <img src={props.image} alt="actualités"/>
                   </ColumnRight>
               </Container> 
           </Section>
        </>
    )
}

export default InfoSection
