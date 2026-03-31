import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({

  title: String,

  description: String,

  imageUrl: String,

  section:{
    type: String,
    enum: ["gallery", "portfolio"],
    default: "gallery"
  }

}, {

  timestamps: true

});

export const Gallery = mongoose.model("Gallery", gallerySchema);