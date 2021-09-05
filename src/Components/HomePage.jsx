import React, { Component } from "react";
import Home1 from '../Assets/images/Home1.jpg';
import Home2 from '../Assets/images/Home2.jpg';
import Home3 from '../Assets/images/Home3.jpg';
import {Box,makeStyles,Typography} from '@material-ui/core';

const useStyle= makeStyles({

    image:{
        width:'30%',
        height:'400px',
         margin:'20px',
         border:'solid 2px black',
         borderRadius:'20px',
         display:'flex'
          } ,
          Component:{
              margin:'20px',
          }


});

const HomePage = ()=>{
    const classes =useStyle();
    return(
        <>
        <Box  className={classes.Component}>
          <Typography variant='h3'> Crud Home Page </Typography>
        </Box>
        <Box style={{display:'flex'}}>
        <img  className={classes.image} src={Home1} alt="Home1"/>
        <img className={classes.image} src={Home2} alt="Home1"/>
        <img className={classes.image} src={Home3} alt="Home1"/>
        </Box>
        </>
    )
    
}


export default HomePage ;