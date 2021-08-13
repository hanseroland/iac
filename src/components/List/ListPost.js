import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ArrowForward,  FolderOpen } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { useHistory} from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: '10px auto',
    backgroundColor: theme.palette.background.paper,
    border: "1px solid grey"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listText:{
    color: '#1a1359'
  }

}));

export default function ListPost(props) {
  const classes = useStyles();
  const {data,title,lien} = props
  const [open, setOpen] = React.useState(true);
  const [opens, setOpens] = React.useState(false);
  const navigate = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"  style={{ backgroundColor: "#1a1359", color:"#fff" }}>
          Parcourir les catégories
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem   button onClick={handleClick}>
        <ListItemIcon>
          <FolderOpen style={{ color: "#1a1359" }} />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {data.map((item,index) => (
          
            <ListItem  key={index} onClick={()=> navigate.push('/'+`${lien}`+'/'+`${item._id}`)} button className={classes.nested}>
              <ListItemIcon>
                <ArrowForward style={{ color: "#1a1359" }} />
              </ListItemIcon>
              <ListItemText className={classes.listText} primary={item.titre} />
            </ListItem>
         
          ))}
        </List>
      </Collapse>
     
    </List>
  );
}
