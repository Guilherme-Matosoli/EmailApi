import { Router } from "express";
import cors from 'cors';
import { SendMailController } from "./controllers/SendMailController";


export const route = Router();
route.use(cors());

route.post("/sendmail", new SendMailController().send)