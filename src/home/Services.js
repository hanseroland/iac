import React, {useEffect, useState } from 'react'

import {Box, Container,Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ServiceData } from '../data/ServiceData';
import { useParams } from 'react-router-dom';
import SectionTitre from '../components/titre/SectionTitre';
import Paragraphe from '../components/services/Paragraphe';
import NewsCard from '../components/carteActu/NewsCard';



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

 const InfoService = {
      contenu:'Acteurs de la construction – Collectivités locales – Entreprises industrielles'+
       '– professionnelles de santé-société de services- gestionnaires du patrimoine'+
       '– Promoteurs Immobilier – Sociétés d’assurance Asset Managers.'
 } 

const Services =  (props) => {

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
                        <Grid container spacing={2}>
                              <Box mt={5} >
                                    <SectionTitre heading="Services"/>
                                    
                                      <Paragraphe  contenu={InfoService.contenu} />
                                      <Container>
                                        <Box mb={20} p={2} >
                                              <Grid container spacing={2}>
                                                  {
                                                      ServiceData.map((item,index)=>(
                                                          <Grid key={index} item lg={3} xs={12}>
                                                              <NewsCard lien="service-details" {...item} />
                                                          </Grid>
                                                      ))
                                                  }
                                              </Grid>
                                          </Box>
                                      </Container>                   
                              </Box>                            
                        </Grid>
               </Container>
           </Box>

        </>
    )
}



export default Services
