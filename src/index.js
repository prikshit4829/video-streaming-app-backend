// require('dotenv').config({path:'/.env'});

import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    const port=process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`Server is running at port: ${port}`);
    })
})
.catch((error)=>{
    console.log("mongoDB connection failed with error",error);
})
















/*
import express from 'express';
const app = express();
// database connect
// ife (immediately executed functio sometimes ';' is put before ife to remove possible errors)
( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // check if app can connect to database
        app.on("error",(error)=>{
            console.log('error:',error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App listning on port ${process.env.PORT}`);
        })
    } catch(error){
        console.log(error);
        throw error
    }
})() 
*/