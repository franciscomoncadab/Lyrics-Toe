import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express();

dotenv.config();

connectDB();
 
app.listen(3001, () => {
     console.log('listening on port 3001')
});