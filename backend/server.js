import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //to parse request.body
app.use(express.urlencoded({ extended: true })); //to parse for data(urlencoded)
app.use(cookieParser());

console.log(process.env.MONGO_URI);

app.use("/api/auth",authRoutes);

app.listen(PORT,() => {
    console.log("Server running on: "+PORT);
    connectMongoDB();
})


//2:42