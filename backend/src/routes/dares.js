import express from "express"

import { savesDares,getRandomDare,updateDare } from "../controllers/dare.js"
import authMiddleware from "../middleware/authmiddleware.js";
import sessionOwnerMiddleware from "../middleware/sessionOwnerMiddleware.js";

const daresRouter=express.Router();

daresRouter.post("/dares",authMiddleware,sessionOwnerMiddleware, savesDares);
daresRouter.get("/random/:sessionId",authMiddleware,sessionOwnerMiddleware ,getRandomDare);
daresRouter.put("/update/:dareId", authMiddleware,sessionOwnerMiddleware,updateDare);


export default daresRouter;