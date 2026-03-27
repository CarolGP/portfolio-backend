import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json([{
        id: 1,
        tittle: "Nombre de ilustracion1",
        description:"Ilustracion digital",
        imageUrl: "https://via.placeholder.com/300"
    }
    ]);
});

export default router;