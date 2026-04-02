import express from "express";
import multer from "multer";

import {
  getGallery,
  deleteItem,
  createItem,
  updateItem
} from "../controllers/gallery.controller.js";


const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage
});


/**
 * @swagger
 * /gallery:
 *   get:
 *     summary: Obtener todas las ilustraciones
 *     responses:
 *       200:
 *         description: Lista de ilustraciones
 */
router.get("/", getGallery);


/**
 * @swagger
 * /gallery/{id}:
 *   delete:
 *     summary: Eliminar ilustración
 */
router.delete("/:id", deleteItem);


/**
 * @swagger
 * /gallery:
 *   post:
 *     summary: Crear ilustración
 */
router.post(
  "/",
  upload.single("image"),
  createItem
);


/**
 * @swagger
 * /gallery/{id}:
 *   put:
 *     summary: Editar título y descripción
 */
router.put("/:id", updateItem);

export default router;