import db from '../databse/db.js'

export const savesDares=async(req,res)=>{
    try{
        const{sessionId,dares}=req.body;

        if(!sessionId || !Array.isArray(dares) || dares.length<1){
            return res.status(400).json({message:"input is invalid"});
        }

        const values=dares.map(text=>[sessionId,text]);

        await db.query(
            "INSERT INTO dares(session_id,text)VALUES ?",
            [values]
        );

        res.status(201).json({
            message:"dares saved successfully",
            count:dares.length,
        });
    }catch(error){
        res.status(500).json({error:error.message});
    }
};