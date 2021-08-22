import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AppRoutes from './AppRoutes';
import Accueil from './home/Accueil';
import SavoireFaireDetail from './home/SavoireFaireDetail';
import Apropos from './home/Apropos'
import Contact from './home/Contact';
import Equipe from './home/Equipe';
import HomeLayout from './home/HomeLayout';
import Partenaires from './home/Partenaires';
import ProjetDetail from './home/ProjetDetail';
import Projets from './home/Projets';
import SavoireFaire from './home/SavoireFaire';
import SecondLayout from './home/SecondLayout';
import ServiceDetail from './home/ServiceDetail';
import Services from './home/Services';
import Erreur from './home/Erreur';



function App() {
  return (
    <>
   
          <Router  basename={process.env.PUBLIC_URL}>
                <Switch>
                        <AppRoutes   exact={true} path="/"   component={Accueil}  layout={HomeLayout} />
                       
                        <AppRoutes   path="/apropos"   component={Apropos}  layout={SecondLayout} />
                        <AppRoutes   path="/savoire-faire"   component={SavoireFaire}  layout={SecondLayout} />
                        <AppRoutes   path="/savoire-faire-details/:id"   component={SavoireFaireDetail}  layout={SecondLayout} />
                        <AppRoutes   path="/projets"   component={Projets}  layout={SecondLayout} />
                        <AppRoutes   path="/services"   component={Services}  layout={SecondLayout} />
                        <AppRoutes   path="/projet-details/:id"   component={ProjetDetail}  layout={SecondLayout} />
                        <AppRoutes   path="/service-details/:id"   component={ServiceDetail}  layout={SecondLayout} />
                        <AppRoutes   path="/equipe"   component={Equipe}  layout={SecondLayout} />
                        <AppRoutes   path="/contact"   component={Contact}  layout={SecondLayout} />
                        <AppRoutes   path="/partenaires"   component={Partenaires}  layout={SecondLayout} />
                        <Route  component={Erreur} />

                        
                </Switch>
          </Router>
     

    </>
  );
}

export default App;
