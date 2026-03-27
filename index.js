import express from "express";
import cors from "cors";
import galleryRoutes from "./routes/gallery.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/gallery", galleryRoutes);

app.get("/", (req, res) =>{
    res.send("API FUNCIONA");
});

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});