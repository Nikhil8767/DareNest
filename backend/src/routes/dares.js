import express from "express"

import { savesDares,getRandomDare,updateDare } from "../controllers/dare.js"
import authMiddleware from "../middleware/authmiddleware.js";
import sessionOwnerMiddleware from "../middleware/sessionOwnerMiddleware.js";

const daresRouter=express.Router();

daresRouter.post("/dares", savesDares);
daresRouter.get("/random/:sessionId", getRandomDare);
daresRouter.put("/update/:dareId", updateDare);


export default daresRouter;