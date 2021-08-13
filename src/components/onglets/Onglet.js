import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Onglet(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box p={3}>
          <Typography  align="justify" >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Onglet.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 304,
    marginTop:100,
    marginBottom:20,
    backgroundColor:'yellow'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor:'red',
    maxWidth:400,
    width: 450
    

  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {
          props.data.map((item,index)=>(
            <Tab  fullWidth label={item.titre} {...a11yProps(index)} />
          ))
        }
           
      </Tabs>
      {
          props.data.map((item,index)=>(
            <Onglet value={value} index={index}>
                 {item.description}
            </Onglet>
          ))
        }
    </div>
  );
}
