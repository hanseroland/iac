import React from 'react'
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import SolidGameCardDemo from '../components/carteActu/Carte';
import { ActuData } from '../data/ActuData';
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
  
    }
  }));

const SavoireFaire =  () => {

    const classes = useStyles();


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
                     <Box mt={20} >
                        <Grid container spacing={2}>
                          {ActuData.map((item,index) => (
                                <Grid  item lg={3} md={6} xs={12}>
                                    <NewsCard key={index} couleur="#fff" lien="savoire-faire-details"  {...item}  />
                                </Grid>
                               ))
                           }
                        </Grid>
                    </Box>
               </Container>

           </Box>

        </>
    )
}



export default SavoireFaire
