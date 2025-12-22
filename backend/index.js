import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/authRouters.js';

const app=express()

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("backend is live")
})
app.use("/api/auth",router)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("backend is running");
    
})