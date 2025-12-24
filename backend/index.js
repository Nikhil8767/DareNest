import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/routes/authRouters.js';
import sessionRouter from './src/routes/sessionRoutes.js';
import daresRouter from './src/routes/dares.js';

const app=express()

dotenv.config();

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://dare-nest.vercel.app",
      "https://dare-nest-lprty0spl-nikhilgupta042024-2977s-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("backend is live")
})
app.use("/api/auth",router)
app.use("/api/select",sessionRouter)
app.use("/api/task",daresRouter)

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("backend is running");
    
})