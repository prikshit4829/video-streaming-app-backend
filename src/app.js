import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

// to let express know we accept json object
app.use(express.json({
    limit:"16kb"
}))

// to let express know we except from url (url can be of diffent type (encoding type) like %20 , + ) for this we use url encoded
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

// to accept and store file(img,favicon,pdf etc.) in server 'public folder
app.use(express.static("public"))

// to get access of browser cookies read/write
app.use(cookieParser())

export {app} 