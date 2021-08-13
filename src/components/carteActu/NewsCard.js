import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 274,
    Height: 404,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    boxShadow:"0px 4px 10px rgba(58, 63, 136, 0.4)",
    marginBottom:30
  },
  content: {
    padding: 24,
  },
  cta: { 
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const NewsCard = React.memo(function NewsCard(props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={props.image}
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={props.titre}
          body={props.subtitre}
        />
        <Link to={'/'+`${props.lien}`+'/' + props._id}  style={{textDecoration:'none'}} >
            <Button color={'primary'} fullWidth className={styles.cta}>
              Voir plus <ChevronRightRounded />
            </Button>
        </Link>
      </CardContent>
    </Card>
  );
});

export default NewsCard