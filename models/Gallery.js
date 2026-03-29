import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({

  title: String,

  description: String,

  imageUrl: String

}, {

  timestamps: true

});

export const Gallery = mongoose.model("Gallery", gallerySchema);