import React, {useEffect, useState } from 'react'

import {Box, Container,Card,CardContent,CardHeader,CardMedia, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ServiceData } from '../data/ServiceData';
import { useParams } from 'react-router-dom';
import FormSection from '../components/FormSection';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 200,
      paddingTop: '56.25%', // 16:9
     objectFit:'cover'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    productTile:{
  
        color: 'blue',
        textDecoration:'none',
  
       '&:hover':{
           color: '#ff6600'
       }
  
    },
    floatedcontainer:{
      width: "100%"
    },
    floated : {
        float: "right",
        width: "350px",
        height: "250px",
        marginLeft:"5px",
        borderRadius:"10px",
        marginBottom:"10px",
        
    }
  }));


  const ContactDetail = 
  {
     
      id:'contact',
      lightBg: true,
      lightText: true,
      lightTextDesc: true,
      topLine: 'Contactez-nous',
      headLine: 'Fondamentalement humaine, la relation de confiance que nous construisons avec vous tire sa force'+
      ' de valeurs piliers',
      description1: "Téléphone : Tél.: (241) 065.540.168",
      description2: "Email : contact@iac-ga.com",
      description3: "Fax: (241) 70 46 60 / 61",
      description4: "Adresse : B.P. 5398 – OWENDO (Rue : CITE SNI)",
      imgStart: false,
      dark: true,
      primary: true,
      darkText: false,
  };

const Contact =  (props) => {

    const classes = useStyles();
    const [data, setData] = useState({})
    const {id} = useParams();
    console.log(id)
    
    useEffect(() => {

     setData(ServiceData.find(x => x._id == id))

      return () => {
              //cleanup
      };
    }, [id]);
   
       return (
        <>
           
             <Box
                p={2}
              
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                    }}
              >
               <Container  maxWidth={false}>
                       
                             <Box  mt={12}>
                                    <FormSection
                                        id={ContactDetail.id}
                                        lightBg={ContactDetail.lightBg}
                                        lightText={ContactDetail.lightText}
                                        lightTextDesc={ContactDetail.lightTextDesc}
                                        topLine={ContactDetail.topLine}
                                        headLine={ContactDetail.headLine}
                                        description1={ContactDetail.description1}
                                        description2={ContactDetail.description2}
                                        description3={ContactDetail.description3}
                                        description4={ContactDetail.description4}
                                        imgStart={ContactDetail.imgStart}
                                        dark={ContactDetail.dark}
                                        primary={ContactDetail.primary}
                                        darkText={ContactDetail.darkText}
                                    />
                             </Box>
                             
                       
               </Container>

           </Box>

        </>
    )
}



export default Contact
