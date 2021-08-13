import React from 'react';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';

const TextInfo = (props) => {
  return (
    <Box maxWidth={343}>
      <CardContent  style={{fontSize:'10px'}}>
        <TextInfoContent
          useStyles={useN03TextInfoContentStyles}
          overline={''}
          heading={props.titre}
          body={props.description}
        />
      </CardContent>
    </Box>
  );
};

export default TextInfo;