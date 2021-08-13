import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const CartComponent = (props) => (
  <Card className={"MuiPostCard--02"}>
    
    <CardMedia
      className={"MuiCardMedia-root"}
      image={props.image}
      
    />
    <CardContent className={"MuiCardContent-root"}>
     {/* <Typography className={"MuiTypography--date"} variant={"overline"}>
        28 Mar 2019
</Typography> */}
      <Typography
        className={"MuiTypography--heading"}
        variant={"h6"}
        style={{fontSize:'14.5px'}}
        gutterBottom
      >
        {props.titre}
      </Typography>
      <Typography style={{fontSize:'12.5px'}}  className={"MuiTypography--subheading"}>
        {props.description.substr(0, 150)}...
      </Typography>
     {/* <Link to={'/actualite-details/' + props._id}  style={{textDecoration:"none"}} >
         <Button className={"MuiButton--readMore"}>Lire plus</Button>
      </Link>*/}
      
    </CardContent>
  </Card>
);

CartComponent.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiPostCard--02": {
        borderRadius: muiBaseTheme.spacing.unit * 2, // 16px
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        width: "95%",
        maxHeight: "200px",
        position: "relative",
        maxWidth: 800,
        marginBottom:'20px',
        marginLeft: "auto",
        overflow: "initial",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: `${muiBaseTheme.spacing.unit * 2}px 0`,
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
        },
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          width: "30%",
          paddingTop: "28%",
          transform: "translateX(-24%)",
          boxShadow: "4px 4px 20px 1px rgba(23, 19, 92, 0.2)",
          borderRadius: muiBaseTheme.spacing.unit * 2, // 16
          backgroundImage: "linear-gradient(147deg, #0e0430 0%, #0e0430 74%)",
          backgroundColor: muiBaseTheme.palette.common.white,
          overflow: "hidden",
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            //backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: muiBaseTheme.spacing.unit * 2, // 16
            opacity: 0.5
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          paddingLeft: 0,
          padding: muiBaseTheme.spacing.unit * 2
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold"
        },
        "& .MuiTypography--subheading": {
          marginBottom: muiBaseTheme.spacing.unit * 2
           
        },
        "& .MuiButton--readMore": {
          backgroundImage: "linear-gradient(147deg, #0e0430 0%, #0e0430 74%)",
          boxShadow: "0px 4px 32px rgba(58, 63, 136, 0.4)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#ffffff"
        }
      }
    }
  }
});
CartComponent.metadata = {
  name: "Post Card II",
  description: "Personal Post",
  credit: "https://codemyui.com/gradient-card-ui-image-info-slider/"
};

export default CartComponent;
