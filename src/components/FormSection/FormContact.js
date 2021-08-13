import React,{useCallback} from 'react'
import { 
    Paper,
    makeStyles,
    Container,
    Box,
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core'
import { Formik } from 'formik';
import * as Yup from 'yup';




const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    
     
    } ,
    textPrimary:{
        color: '#1a1359',
      },

      buttonStyle: {
        backgroundColor: "#1a1359",
        color: "#fff",
      
        "&:hover":{
            backgroundColor: "#e6731c",
        }
    },
    buttonFbk: {
        backgroundColor: "#1a1359",
        color: "#fff",
      
        "&:hover":{
            backgroundColor: "#1a1359",
        }
    }
  }));


const FormContact = () => {

    const classes = useStyles();
   

    return (
        <>
            <Paper className={classes.root}>
                <Box
                    display="flex"
                    flexDirection="column" 
                    height="100%"
                    justifyContent="center"
                   
                >
                 <Container maxWidth="sm">
                        <Formik
                          initialValues={{
                            societe: '',
                            email: '',
                          //  nom: '',
                          //  telephone:'',
                            objet: '',
                            message: ''
                          }}

                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Vous devez entrer un email valid').max(100).required('Email requis'),
                           // nom: Yup.string().max(50).required('Mot de passe  requis'),
                           // telephone: Yup.string().max(9),
                            objet: Yup.string().max(50).required('Objet requis'),
                            message: Yup.string().max(1000).required('Message requis'),
                        })}

                        onSubmit={() => {
                            console.log('Auth')
                          
                         }}
                        >

                           {({
                                errors,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                touched,
                                values
                                }) => (
                                    <form  onSubmit={handleSubmit}>
                                         <Box mb={3}>
                                            <Typography
                                                color="textPrimary"
                                                variant="h4"
                                                className={classes.textPrimary}
                                            >
                                                Vous avez une préocupation ?
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                gutterBottom
                                                variant="body2"
                                                className={classes.textPrimary}
                                            >
                                               Envoyez-nous un message
                                            </Typography>
                                            </Box>
                                            <Grid container spacing={2} >
                                          {/*  
                                             <TextField
                                                        error={Boolean(touched.nom && errors.nom)}
                                                        fullWidth
                                                        helperText={touched.nom && errors.nom}
                                                        label="Nom"
                                                        margin="normal"
                                                        name="nom"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.nom}
                                                        variant="outlined"
                                                        required
                                              />*/
                                          }

                                            <TextField
                                                error={Boolean(touched.email && errors.email)}
                                                fullWidth
                                                helperText={touched.email && errors.email}
                                                label="Adresse Email"
                                                margin="normal"
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="email"
                                                value={values.email}
                                                variant="outlined"
                                                required
                                            />
                                          
                                            {/* 
                                                <TextField
                                                    error={Boolean(touched.societe && errors.societe)}
                                                    fullWidth
                                                    helperText={touched.societe && errors.societe}
                                                    label="Societe"
                                                    margin="normal"
                                                    name="societe"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    value={values.societe}
                                                    variant="outlined"
                                                
                                            /> */}
                                           
                                            {/* 
                                                <TextField
                                                    error={Boolean(touched.telephone && errors.telephone)}
                                                    fullWidth
                                                    helperText={touched.telephone && errors.telephone}
                                                    label="Téléphone"
                                                    margin="normal"
                                                    name="telephone"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="text"
                                                    value={values.telephone}
                                                    variant="outlined"
                                                />*/
                                            }
                                             <TextField
                                                error={Boolean(touched.objet && errors.objet)}
                                                fullWidth
                                                helperText={touched.objet && errors.objet}
                                                label="Objet du méssage"
                                                margin="normal"
                                                name="objet"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.objet}
                                                variant="outlined"
                                                required
                                            />

                                            <TextField
                                                error={Boolean(touched.message && errors.message)}
                                                fullWidth
                                                helperText={touched.message && errors.message}
                                                label="Méssage"
                                                margin="normal"
                                                name="message"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.message}
                                                variant="outlined"
                                                multiline
                                                rows={7}
                                                required
                                            />

                                            </Grid>
                                            <Box my={2}>
                                            <Button
                                                className={classes.buttonStyle}
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                            >
                                                Envoyer
                                            </Button>
                                            </Box>

                                    </form>
                            )}

                        </Formik>
                 </Container>
                </Box>

            </Paper>
        </>
    )
}

export default FormContact