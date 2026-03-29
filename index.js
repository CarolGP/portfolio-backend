import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./config/db.js";
import galleryRoutes from "./routes/gallery.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/gallery", galleryRoutes);

app.get("/", (req, res) =>{
    res.send("API FUNCIONA");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});