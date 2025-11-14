import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String },
    director: { type: String },
    cast: [
      {
        name: { type: String },
      },
    ],
    language: { type: String },
    duration: { type: String },
  },
  { timestamps: true }
);

export const Movie = mongoose.model("Movies", movieSchema);
