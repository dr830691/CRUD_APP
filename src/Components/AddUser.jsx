import React, { Component }  from 'react';
import { FormGroup,FormControl, Input, InputLabel, Button, Typography } from "@material-ui/core";
import {  makeStyles} from "@material-ui/styles";
import { useState } from "react";
import { addUser } from "../Services/api";
import { useHistory } from "react-router";
const useStyle =makeStyles (
    {
        container:{
            width:"50%",
            margin:"5% 0 0 25%",
            '& > *':{
                marginTop:20
            }
        }

    });
    const initialValue ={
        name:"",
        username:"",
        email:"",
        phone:""
    };

const AddUser =() =>{
    
    const [user,setUser] =useState(initialValue);
    const {name,username,email,phone} =user;
    const classes = useStyle();
    const history =useHistory();
    const onValueChange= (e)=>{
        console.log(e.target.value);// Check Value is inserted or not
        setUser({...user,[e.target.name]:e.target.value})// spread operator
        console.log(user);
    }

    const addUserDetails = async() =>{
           await addUser(user);
           history.push('./all');
    }
    
    return (
        <div>
        <FormGroup className={classes.container}>
            <Typography variant="h4">
                Add User
            </Typography>
            <FormControl>
                <InputLabel> Name:</InputLabel>
                 <Input onChange= {(e)=>onValueChange(e)}  name="name" value={name}/>
                  
            </FormControl>
            <FormControl>
                <InputLabel> Username:</InputLabel>
                 <Input onChange= {(e)=>onValueChange(e)}  name="username" value={username}  />
                  
            </FormControl>
            <FormControl>
                <InputLabel> Email:</InputLabel>
                <Input onChange= {(e)=>onValueChange(e)}  name="email" value={email}/>
                
            </FormControl>
            <FormControl>
                <InputLabel> Phone:</InputLabel>
                <Input onChange= {(e)=>onValueChange(e)}  name="phone" value={phone}/>
                   
            </FormControl>
            <Button variant="contained" onClick={()=>addUserDetails()} color="primary">Add User</Button>
        </FormGroup>
        </div>
    )
}


export default AddUser;