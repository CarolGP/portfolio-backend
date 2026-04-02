import { Gallery } from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";

export const getGallery = async (req, res) => {

  try {
    const items = await Gallery.find({ section: "gallery" });
    res.json(items);

  } catch (error) {
    res.status(500).json({
      message: "Error obteniendo galería"
    });
  }
};


export const deleteItem = async (req, res) => {

  try {
    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      message: "Ilustración eliminada"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error eliminando ilustración"
    });
  }
};


export const createItem = async (req, res) => {

  try {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "portfolio" },
      async (error, result) => {
        if (error) {

          return res.status(500).json({
            message: "Error subiendo imagen"
          });
        }
        const newItem = new Gallery({

          title: req.body.title,
          description: req.body.description,
          imageUrl: result.secure_url,
          section: req.body.section

        });

        await newItem.save();

        res.json(newItem);

      }
    );

    stream.end(req.file.buffer);

  } catch (error) {
    res.status(500).json({
      message: "Error creando ilustración"
    });
  }
};


export const updateItem = async (req, res) => {

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

  } catch (error) {

    res.status(500).json({
      message: "Error actualizando ilustración"
    });
  }
};