import express from "express";
import { Gallery } from "../models/Gallery.js"

import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage});

router.get("/", async (req, res) => {
    try {
        const items = await Gallery.find();
        res.json(items);

    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.json({ message: "Ilustración eliminada" });

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", upload.single("image"), async (req,res) => {
    try {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "portfolio" },
            async (error, result) => {
                if(error){
                    return res.status(500).json(error);
                }

                const newItem = new Gallery({
                    title: req.body.title,
                    description: req.body.description,
                    imageUrl: result.secure_url
                });

                await newItem.save();

                res.json(newItem);
            }
        );

        stream.end(req.file.buffer);

    } catch(error) {
        res.status(500).json(error);
    }
});

export default router;