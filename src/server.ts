import "dotenv/config";
import express from "express";
import { route } from "./routes";

const app = express();
app.use(express.json());
app.use(route);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`));