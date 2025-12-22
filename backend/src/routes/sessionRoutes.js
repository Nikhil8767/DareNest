import express from 'express'
import { createSession } from '../controllers/session.js'

const router=express.Router();

router.post("/session",createSession);
export default router;
