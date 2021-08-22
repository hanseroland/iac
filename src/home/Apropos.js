import React from 'react'
import {Box, Container, Divider, Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import InfoSection from '../components/infoSection';
import { CompetencesData, InfoData } from '../data/InfoData';
import SectionTitre from '../components/titre/SectionTitre';
import FormSection from '../components/FormSection';
import Temoignages from '../components/temoignages/Temoignages';
import EquipeSection from '../components/equipe/EquipeSection';
import Paragraphe from '../components/services/Paragraphe';
import SkillsCard from '../components/carteActu/SkillsCard';



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

const InfoEntreprise = {
  contenu:'Ingénierie Access ConsultingEst un cabinet de à responsabilité limitée (SARL).'+ 
  'Les activités du bureau sont essentiellementaxées autour des études d’Ingenierie,'+ 
  'de l’assistance technique et suivi, contrôle des travauxrience de ses ressources'+ 
  'humaines pour la bonne réalisation des travaux confiés.'+
  'Notre mission consiste à permettre de conserver l’intégrité du bâti.'+ 
  'Le sécuriser, optimiser sa performanceTechnique, environnementale, Economique,'+
  'mais aussi identifie,Evaluer, gérer, sécuriser tout au long du cycle depuis l’étude'+ 
  'jusqu’au Décommissionnement en passant par Son exploitation.'
} 

const Apropos =  () => {

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
                           
                                    <Box mt={10} >
                                        <SectionTitre heading="Qui sommes-nous ?"/>
                                        <Paragraphe contenu={InfoEntreprise.contenu} />
                                        {/*<InfoSection  display={false} {...InfoData} />*/}
                                        <Box p={2}>
                                             <Typography  variant="h6" variant="h4" >Nos compétences</Typography>
                                        </Box>
                                       
                                          <Grid container>
                                      
                                            {
                                              CompetencesData.map((item,index)=>(
                                                  <Grid key={index} item lg={3} md={4} >
                                                        <SkillsCard  {...item} />
                                                  </Grid>
                                              ))
                                            }
                            
                                          </Grid>
                                         

                                        <Divider/>
                                       {/* <SectionTitre heading="Notre équipe"/>
                                        <EquipeSection/>*/}
                                        <Divider/>
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
                                      {/*  <Divider/>
                                       
                                        
                                        <Temoignages/>
                                      */}
                                    </Box>
                        </Grid>
               </Container>

           </Box>

        </>
    )
}



export default Apropos
