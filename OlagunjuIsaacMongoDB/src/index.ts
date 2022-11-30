import express from 'express';
import logger from 'morgan';
import todoRouter from './routes/todoRoute';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL!, () =>{
    console.log("Database Connected Successfully");
})

app.use(express.json())
app.use(logger('dev'))
app.use('/todo', todoRouter)


const Port = 4045

app.listen(Port, () =>{
    console.log(`Server Running at http://localhost:${Port}`);
    
})