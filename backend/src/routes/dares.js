import express from "express"

import { savesDares,getRandomDare,updateDare } from "../controllers/dare.js"

const daresRouter=express.Router();

daresRouter.post("/dares",savesDares);
daresRouter.get("/random/:sessionId",getRandomDare);
daresRouter.put("/update/:dareId", updateDare);


export default daresRouter;