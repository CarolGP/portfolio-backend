import { Gallery } from "../models/Gallery.js";

export const getPortfolio = async (req, res) => {

  try {
    const items = await Gallery.find({ section: "portfolio" });

    res.json(items);

  } catch (error) {
    res.status(500).json({
      message: "Error obteniendo portfolio"
    });
  }
};