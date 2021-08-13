import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OrgChart from '@mui-treasury/components/chart/org';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ImageOne from '../../images/etty-fidele-VNYCIbZju0o-unsplash.jpg';
import ImageTwo from '../../images/caique-silva-KJE--xk4AWE-unsplash.jpg';
import ImageThree from '../../images/fortune-vieyra-qC7jvmbEmRQ-unsplash.jpg';
import ImageFour from '../../images/emmanuel-ikwuegbu-KHO_jvns5Xc-unsplash.jpg';
import ImageFive from '../../images/gleisson-joaquim-MTMsK4cEF3M-unsplash.jpg';
import ImageSix from '../../images/etty-fidele-6UWqw25wfLI-unsplash.jpg';

const useStyles = makeStyles(() => ({
  avatar: {
    width: 64,
    height: 64,
  },
  name: {
    fontFamily: 'fira sans',
    fontWeight: 'bold',
    fontSize: 14,
    whiteSpace: 'nowrap',
    marginTop: 4,
  },
  position: {
    verticalAlign: 'super',
  },
}));

const Arbre = () => {
  const styles = useStyles();
  return (
    <OrgChart
      spacingX={24}
      treeData={getData()}
      renderContent={({ src, name, position }) => (
        <Box mt={2} mb={4} align={'center'}>
          <Avatar className={styles.avatar} src={src} />
          <Typography className={styles.name} variant={'h6'}>
            {name}
          </Typography>
          <Typography
            className={styles.position}
            color={'textSecondary'}
            variant={'caption'}
          >
            {position}
          </Typography>
        </Box>
      )}
    />
  );
};

const getData = () => ({
  name: 'JunZaa',
  position: 'CEO',
  src:ImageOne,
  children: [
    {
      name: 'Husna Childs',
      position: 'CIO',
      src: ImageTwo,
      children: [
        {
          name: 'Raihan Moon',
          position: 'Manager',
          src: ImageThree,
        },
        {
          name: 'Calista Hines',
          position: 'Manager',
          src: ImageFour,
        },
      ],  
    },
    {
      name: 'Iona Reyes',
      position: 'CFO',
      src: ImageFive,
    },
    {
      name: 'Fred Frank',
      position: 'CMO',
      src: ImageSix,
    },
  ],
});

export default Arbre;