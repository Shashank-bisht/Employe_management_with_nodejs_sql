import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}));
// Configuring the express application to use JSON parsing middleware
app.use(express.json());
app.use('/auth',adminRouter)
app.listen(8000,()=>{
    console.log("running server");
})