import React, {useEffect, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import {Box, Container,Card,CardContent,CardHeader,CardMedia, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { ServiceData } from '../data/ServiceData';
import ListPost from '../components/List/ListPost';
import { useParams } from 'react-router-dom';



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

  

const ServiceDetail =  (props) => {

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
                             <Grid item lg={4} md={6}  xs={12}>
                                <Box mt={15} mb={1}>
                                    <ListPost lien="service-details" title="Services" data={ServiceData} />
                                 </Box>
                             </Grid>
                             <Grid item lg={8} xs={12}>
                                <Box mt={15}>
                                       
                                        
                                 {/*ServiceData.find(x => x._id == props.match.params.id).map((item,index) =>(*/
                                        <Card  >
                                            <CardHeader  title={data.titre}  />
                                            <CardContent>
                                            <Typography className={classes.floatedcontainer} align="justify" >
                                            <CardMedia  
                                                image={data.image}
                                                title={data.titre}
                                                height="200"
                                                component="img"
                                                alt=""
                                                className={classes.floated}
                                            />
                                            
                                              
                                                <MDEditor.Markdown source={data.description} />
                                            </Typography>
                                            </CardContent>

                                        </Card>
                                      /*  ))*/}
                                         
                                     
                                    </Box>
                             </Grid>
                        </Grid>
               </Container>

           </Box>

        </>
    )
}



export default ServiceDetail
