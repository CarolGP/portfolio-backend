import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";

import authRoutes from "./routes/auth.routes.js";

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./config/db.js";
import galleryRoutes from "./routes/gallery.routes.js";
import portfolioRoutes from "./routes/portfolio.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/gallery", galleryRoutes);
app.use("/portfolio", portfolioRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", authRoutes);

app.get("/", (req, res) =>{
    res.send("API FUNCIONA");
});

const PORT = process.env.PORT || 3000;


export default app;


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});