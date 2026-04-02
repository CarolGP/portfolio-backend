import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String,
    required: true
  },

  section: {
    type: String,
    enum: ["gallery", "portfolio"],
    default: "gallery"
  }

}, {
  timestamps: true
});

export const Gallery = mongoose.model("Gallery", gallerySchema);