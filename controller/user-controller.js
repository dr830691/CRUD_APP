// import { request, response } from "express";
import { request, response } from "express";
import user_model from "../model/user-schema.js";



export const getUsers=async (request,response)=>{
        // response.status(200).json("Hi From ravindar");
        try{
                let user=await user_model.find();
                response.json(user);
        }
        catch{
                response.json({Message: error.message});
        }
}
export const addUser= async(request,response)=>{
        // console.log("hi Ravindar Dancing");
        // response.send("Hi Ravindar Dancing");
        const user=request.body;
        const newUser =new user_model(user);

        try{
                await  newUser.save();
                response.json(newUser);
                // response.json("user Added Succesfully ");
        }
        catch{
                response.json({Message: error.message});
        }
}
export const getUserById= async(request,response)=>{
        const id =request.params.id;
        
         try{
                const user= await user_model.findById(id);
                response.json(user);
                // response.json("user find Succesfully ");
        }
        catch{
                response.json({message:error.message});
        }
}

export const editUser= async(request,response)=>{
        const user =request.body;
        const editUser= new user_model(user);
       
       try {
            await user_model.updateOne({_id:request.params.id},editUser);
            response.json(editUser);
        //     response.json("user Edited Succesfully ");
            
        }
        catch{
                   response.json({message:message.error});
        }
}
export const deleteUser = async (request,response) =>{

        try{
                await user_model.deleteOne({_id: request.params.id});
                 response.json("user Deleted Succesfully ");
        }
        catch(error){
                response.json({message: error.message});
        }
}