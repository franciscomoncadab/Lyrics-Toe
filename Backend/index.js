import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/userRoutes.js'

const app = express();

dotenv.config();

connectDB();

//Routes
app.use('/api/user', userRouter); 


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
     console.log(`listening on port ${PORT}`)
});