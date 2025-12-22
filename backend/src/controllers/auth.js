import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../databse/db.js'




export const register=async(req,res)=>{
    try{
    const {name,email,password}=req.body;

    const hashedPassword=await bcrypt.hash(password,10);

    await db.query(
        "INSERT INTO users(name,email,password)VALUES(?,?,?)",
        [name,email,hashedPassword]
    );

    res.json({message:"user registered successfully!"});
}catch(error){
    console.error(error);
    res.status(500).json({message:"server error"});
}
};


export const login =async (req,res)=>{
    const{email,password}=req.body;

    const[users]=await db.query(
        "SELECT * FROM users WHERE email=?",
        [email]
    );

    if(users.length===0){
        return res.status(401).json({msg:"invalid credentials"});
    }

    const user=users[0];
    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token=jwt.sign(
        {id:user.id,email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    );
    res.json({token});
};