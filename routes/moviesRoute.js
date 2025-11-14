import express from "express";
import {
  createReview,
  getReviewsForMovie,
  serveMovies,
} from "../controllers/movieController.js";
import { authMiddleware } from "../middlewares/authMiddleWare.js";
const router = express.Router();
router.get("/", authMiddleware, serveMovies);
router.post("/create/:movieId", authMiddleware, createReview);
router.post("/get-reviews/:movieId", authMiddleware, getReviewsForMovie);
export default router;
