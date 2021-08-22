import React from 'react';
import Hero from '../components/hero';
import HeroSection from '../components/heroSection';
import Cards from '../components/services/Cards';
import { ActuData } from '../data/ActuData';
import { ServiceData } from '../data/ServiceData';
import { SliderData } from '../data/SliderData';
import { InfoData } from '../data/InfoData';
import InfoSection from '../components/infoSection/index'
import CompanySection from '../components/CompanySection/Index';
import SectionTitre from '../components/titre/SectionTitre';
import { Divider,Box, Container, Grid,  } from '@material-ui/core';
import Slide from '../components/Slide';
import NewsCard from '../components/carteActu/NewsCard';

const HeroObjet = 
{
   
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Le savoir-faire',
    headLine: "L’Ingénierie au services de vos projets",
    description: "L’approche humaine de notre cabinet est un atout pour répondre à notre haute exigence de performance et présenter une  vision neuve.",
    buttonLabel: 'Voir plus',
    dark: true,
    primary: true,
    darkText: false,
    showButton: false,
    path: "/savoire-faire"
   
};
const Accueil = () => {
    return (
        <>
          {/*  <Hero slides={SliderData} />*/}
            <Slide/>
            <Box
                mt={2}
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 3
                }}
                >
          <Container maxWidth={false}>
                    <HeroSection
                        
                            lightBg={HeroObjet.lightBg}
                            lightText={HeroObjet.lightText}
                            lightTextDesc={HeroObjet.lightTextDesc}
                            topLine={HeroObjet.topLine}
                            headLine={HeroObjet.headLine}
                            description={HeroObjet.description}
                            buttonLabel={HeroObjet.buttonLabel}
                            dark={HeroObjet.dark}
                            primary={HeroObjet.primary}
                            darkText={HeroObjet.darkText}
                            showButton={HeroObjet.showButton}
                            path={HeroObjet.path}
                            data={ActuData} 
                    
                    />
                    <Divider/>
                    <Container>
                        <Box mb={20}  >
                           <SectionTitre
                                heading="Services" 
                            />
                                <Grid container  spacing={1} >
                                    {
                                        ServiceData.slice(0,4).map((item,index)=>(
                                            <Grid key={index} item lg={3}  xs={12}>
                                                <NewsCard lien="service-details" {...item} />
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Box>
                        </Container>

                        <Divider/>
                        <InfoSection  display={true} {...InfoData} /> 
                        <Divider/>
                       {/* <SectionTitre heading="Nos partenaires"/>
                        <CompanySection/> */}
                </Container>
        </Box>
        </>
    );
};


export default Accueil;
