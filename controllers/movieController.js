import { Movie } from "../models/MovieModel.js";
import Review from "../models/Review.js";

import ReviewModel from "../models/Review.js";
export const serveMovies = async (req, res) => {
  const user = req.user;
  if (!user) {
    console.log("unauthorized");
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  // Fetch movies from database or any other source
  const movies = await Movie.aggregate([
    {
      $lookup: {
        from: "reviews", // collection name in MongoDB (should match your Review collection)
        localField: "_id",
        foreignField: "movie",
        as: "reviews",
      },
    },
    {
      $addFields: {
        avgRating: { $avg: "$reviews.rating" },
        reviewCount: { $size: "$reviews" },
      },
    },
    {
      $project: {
        title: 1,
        genre: 1,
        releaseYear: 1,
        thumbnail: 1,
        description: 1,
        video: 1,
        director: 1,
        cast: 1,
        language: 1,
        duration: 1,
        avgRating: { $ifNull: ["$avgRating", 0] },
        reviewCount: 1,
      },
    },
  ]);

  return res.status(200).json({ movies, success: true });
};
export const createReview = async (req, res) => {
  const { movieId } = req.params;
  const { rating, comment } = req.body;
  const user = req.user.id;
  if (!user) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  try {
    const review = await ReviewModel.create({
      user,
      movie: movieId,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getReviewsForMovie = async (req, res) => {
  const { movieId } = req.params;
  try {
    const reviews = await Review.find({ movie: movieId }).populate(
      "user",
      "name"
    );

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
