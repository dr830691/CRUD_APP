import {getUsers} from "../Services/api";
import { useEffect, useState } from "react";
import { Table, TableCell, TableRow,TableHead,TableBody } from "@material-ui/core";


const AllUsers= () =>{
     
    const [users,setUsers] =useState();
    useEffect( ()=>{
            getAllUsers();
    },[])
    const getAllUsers = async() =>{
    const response =await getUsers();
    console.log(response.data);
    setUsers(response.data);
    console.log(users);console.log(1);
    // console.log(users);console.log(2);
    } 
    return (
    
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                { users.map((user)=>{
                        <TableRow>
                            <TableCell> {user.id} </TableCell>
                            <TableCell> {user.name} </TableCell>
                            <TableCell> {user.username} </TableCell>
                            <TableCell> {user.email} </TableCell>
                            <TableCell> {user.phone} </TableCell>
                        </TableRow>
                        } )
                    }
            </TableBody>
        </Table>
        
        
    )

}


export default AllUsers;
