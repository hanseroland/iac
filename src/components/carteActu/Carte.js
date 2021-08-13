import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { Link } from 'react-router-dom';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    boxShadow: '0 6px 20px rgba(7, 21, 46, 0.17)',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 200,
    borderRadius: 16,
    //boxShadow: '0 6px 20px rgba(7, 21, 46, 0.17)',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-10)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1rem 1rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '1.2rem',
    color: '#000',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#000',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 12,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard(props) {

  const gridStyles = useGridStyles();
  const styles3 = useStyles({ color: `${props.couleur}` });
 
   const getPath = (lien) => {
     let path = ""
        if(lien==""){
          return path = '/apropos'
        }else{
          return path = '/'+`${props.lien}`+'/' + props._id
        }
   }
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
       
        <Grid item>
          <Link to={getPath(props.lien)}  style={{textDecoration:"none"}} >
              <CustomCard
                    classes={styles3}
                    title={props.titre}
                    subtitle={props.subtitre}
                    image={props.image}
                />
              </Link>
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo