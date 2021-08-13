import React, {useEffect, useState } from 'react'
import {Box, Container, Grid, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import EquipeSection from '../components/equipe/EquipeSection'



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

  

const Equipe =  (props) => {
   
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
                    <Box mt={12} >
                        <Grid container spacing={2}>
                             <Grid item   xs={12}>
                                   <EquipeSection/> 
                             </Grid>
                        </Grid> 
                    </Box>
               </Container>

               </Box>

        </>
    )
}



export default Equipe
