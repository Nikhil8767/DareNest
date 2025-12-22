import db from '../databse/db.js'

export const createSession=async(req,res)=>{
    try{
        const{sessionType,userId}=req.body;

        if(!userId || !sessionType){
            return res.status(400).json({message:"missing data"});
        }

        if(!["friends","couple"].includes(sessionType)){
             return res.status(400).json({ message: "Invalid session type" });
        }

        const[result]=await db.query(
            `INSERT INTO game_sessions(session_type,user_id)
            VALUES(?,?)`,
            [sessionType,userId]
        );

        res.status(201).json({
            message:"game session created",
            sessionId:result.insertId,
            sessionType,
        });
    }
    catch(error){
        res.status(500).json({msg:error.message});
    }
};