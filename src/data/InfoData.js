import ImageOne from '../images/slide-5.png'
import ImageTwo from '../images/slide-6.jpg'
import ImageThree from '../images/slide-7.jpg'
import ImageFour from '../images/slide-8.jpg'
import ImageComp from '../images/free-setting.png'

export const InfoData = {
    heading: 'Qui sommes-nous ?',
    paragrapheOne:'Ingénierie Access Consulting'+
    'Est un cabinet de à responsabilité limitée (SARL). Les activités du bureau sont essentiellement'+ 
    'axées autour des études d’Ingenierie, de l’assistance technique et suivi, contrôle des travaux'+
    'rience de ses ressources humaines pour la bonne réalisation des travaux confiés.'+
    'Notre mission consiste à permettre de conserver l’intégrité du bâti. Le sécuriser, optimiser sa performance'+
    'Technique, environnementale, Economique, mais aussi identifie,'+
    'Evaluer, gérer, sécuriser tout au long du cycle depuis l’étude jusqu’au Décommissionnement en passant par Son exploitation.',
    buttonLabel:'Voir plus',
    image:ImageOne,
    reverse: false,
    delay:100

}

export const CompetencesData = [
    {
        _id:1,
        categorie:'Nos Compétences',
        titre:'La conception',
        image:ImageComp,
        description:'Nos interventions couvrent l’ensembleDes missions de conception :'+ 
                    'De l’identification du projet au Lancement des appels d’offres pour'+                  
                    'La réalisation des travaux.'
                   
    },
    {
        _id:2,
        categorie:'Nos Compétences',
        titre:'L’assistance technique et l’appui',
        image:ImageComp,
        description:'A la mise en œuvre des projets et aux réformes administratives et institutionnelles par'+ 
        "le détachement des experts pour les missions d’audit. D’organisation et de formations  d’homologues."+
        'Nos équipes d’experts assurent un transfert de compétences pour une coopération réussie avec chaque partenaire.'
       
    },
    {
        _id:3,
        categorie:'Nos Compétences',
        titre:'La Maitrise d’œuvre d’exécution',
        image:ImageComp,
        description:'Nous assurons le management de projets, le suivi et le contrôle de la mise'+ 
        'En œuvre des projets neufs et de réhabilitation jusqu’à la réception des travaux' 
    },
    
    {
        _id:4,
        categorie:'Nos Compétences',
        titre:'La maîtrise de nos Services',
        image:ImageComp,
        description:'Copieur/scanner de plans A0 de marque Océ Plot-Wave 300 équipé d’un ordinateur de commande'+ 
        "de 2.5m, d’une plieuse de plan électrique et de divers maté- riel a permis à PG Constructions de disposer d’un Centre de reprographie moderne et efficace."+
        'Nos équipes d’experts assurent un transfert de compétences pour une coopération réussie avec chaque partenaire.'
       
    }
]

export const InfoActu = [

    {
        _id:1,
        titre:'Lorem Ipsum dolor',
        auteur:'Sed',
        date:'25/06/2021',
        image:ImageOne,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:2,
        titre:'Labore et dolore magna',
        auteur:'Magna',
        date:'12/06/2021',
        image:ImageTwo,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:3,
        titre:'Excepteur sint occaecat',
        auteur:'Sint',
        date:'26/06/2021',
        image:ImageThree,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        _id:4,
        titre:'Dolor sit amet',
        auteur:'Veniam',
        date:'30/06/2021',
        image:ImageFour,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'+
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'+
                    'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in'+ 
                    'culpa qui officia deserunt mollit anim id est laborum.'
    }
]