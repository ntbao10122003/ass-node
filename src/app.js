import  express  from "express";
import productRouter from "./routers/product";
import cors from "cors";
import mongoose from "mongoose";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api" , productRouter);

mongoose.connect('mongodb://127.0.0.1:27017/we17303');

export const viteNodeApp = app;