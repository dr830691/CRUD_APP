import express from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
const app=express() ;

app.use('/users',route);



const PORT=8000;
const URL ='mongodb+srv://ravindar12:Password000@crud.pqrmg.mongodb.net/CRUD?retryWrites=true&w=majority';


mongoose.connect(URL,{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running successfully on port ${PORT}`);
    });
}).catch(error=>{
    console.log(`Error: ` ,error.message);
})
// 







