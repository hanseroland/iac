import React, {useEffect, useState } from 'react'

import {Box, Container,Card,CardContent,CardHeader,CardMedia, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ProjetData } from '../data/ProjetData';
import { useParams } from 'react-router-dom';
import Cards from '../components/services/Cards';
import SectionTitre from '../components/titre/SectionTitre';
import Paragraphe from '../components/services/Paragraphe';





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


 const InfoProjet = {
  contenu:'La station services de la voie express, livrée début janvier 2012, a été contrôlée par nos experts en 4 mois.'+
  'Elle trône magistralement entre l’échangeur de Nzeng-ayong et celui de la démocratie.'
} 
  

const Projets =  (props) => {

    const classes = useStyles();
    const [data, setData] = useState(ProjetData)
    const {id} = useParams();
    console.log(id)
    
    useEffect(() => {
    if(!id){
     setData(ProjetData.find(x => x._id == id))
    }
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
                            <SectionTitre heading="Projets"/>
                               <Paragraphe  contenu={InfoProjet.contenu} />
                               <Cards lien="projet-details" data={ProjetData} />
                            </Box>
                        </Grid>
               </Container>

           </Box>

        </>
    )
}



export default Projets
