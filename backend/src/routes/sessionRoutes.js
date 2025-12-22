import express from 'express'
import { createSession } from '../controllers/session.js'
import authMiddleware from '../middleware/authmiddleware.js';

const sessionRouter=express.Router();

sessionRouter.post("/session",authMiddleware,createSession);
export default sessionRouter;
