import React from 'react'
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import SolidGameCardDemo from '../carteActu/Carte';
import { EquipeData } from '../../data/EquipeData';


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

const EquipeSection =  () => {

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
                      
                        <Grid container spacing={2}>
                          {EquipeData.map((item,index) => (
                                <Grid  item lg={3} md={6} xs={12}>
                                    <SolidGameCardDemo key={index} couleur="#fff" lien=""  {...item}  />
                                </Grid>
                               ))
                          }
                        </Grid>
                   
               </Container>

           </Box>

        </>
    )
}



export default EquipeSection
