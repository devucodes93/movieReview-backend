import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import moviesRouter from "./routes/moviesRoute.js";
import cookieParser from "cookie-parser";
import { dbConnect } from "./lib/db.js";
dotenv.config();
/**/
const app = express();
app.use(cookieParser());
app.use(
  express.static("public", {
    maxAge: "1y", // or 31536000000 ms
    setHeaders: (res, path) => {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
// https://reelxplore93.web.app
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

dbConnect();
app.use((req, res, next) => {
  res.setTimeout(600000, () => {
    res.status(408).send("Request Timeout");
  });
  next();
});

app.use("/api/auth", userRouter);
app.use("/api/movies", moviesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server running on port 3001");
});
