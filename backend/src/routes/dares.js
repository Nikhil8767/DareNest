import express from "express"

import { savesDares,getRandomDare } from "../controllers/dare.js"

const daresRouter=express.Router();

daresRouter.post("/dares",savesDares);
daresRouter.get("/random/:sessionId",getRandomDare);

export default daresRouter;