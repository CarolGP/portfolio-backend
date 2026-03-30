import express from "express";
import { Gallery } from "../models/Gallery.js"

import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });



/**
 * @swagger
 * /gallery:
 *   get:
 *     summary: Obtener todas las ilustraciones
 *     responses:
 *       200:
 *         description: Lista de ilustraciones
 */
router.get("/", async (req, res) => {

    try {

        const items = await Gallery.find();

        res.json(items);

    } 
    
    catch (error) {

        res.status(500).json(error);

    }

});



/**
 * @swagger
 * /gallery/{id}:
 *   delete:
 *     summary: Eliminar una ilustración
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ilustración
 *     responses:
 *       200:
 *         description: Ilustración eliminada
 */
router.delete("/:id", async (req, res) => {

    try {

        await Gallery.findByIdAndDelete(req.params.id);

        res.json({ message: "Ilustración eliminada" });

    } 
    
    catch (error) {

        res.status(500).json(error);

    }

});



/**
 * @swagger
 * /gallery:
 *   post:
 *     summary: Crear una ilustración
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Ilustración creada
 */
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

    } 
    
    catch(error) {

        res.status(500).json(error);

    }

});



/**
 * @swagger
 * /gallery/{id}:
 *   put:
 *     summary: Editar título y descripción
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ilustración
 *     responses:
 *       200:
 *         description: Ilustración actualizada
 */
router.put("/:id", async (req, res) => {

    try {

        const updatedItem = await Gallery.findByIdAndUpdate(

            req.params.id,

            {

                title: req.body.title,

                description: req.body.description

            },

            { new: true }

        );



        res.json(updatedItem);

    } 
    
    catch (error) {

        res.status(500).json(error);

    }

});


export default router;