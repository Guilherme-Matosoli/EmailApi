import { Router } from "express";
import cors from 'cors';


const route = Router();
route.use(cors());

route.post("/sendmail")