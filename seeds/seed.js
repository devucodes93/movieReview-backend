import mongoose from "mongoose";
import dotenv from "dotenv";
import { Movie } from "../models/MovieModel.js";

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://devu935352:A5eidBqmrtUKFoyo@cluster0.ocvoeco.mongodb.net/moviesDB?tlsAllowInvalidCertificates=true"
  )
  .then(() => console.log("MongoDB Connected for seeding"))
  .catch((err) => console.log(err));

export const movies = [
  {
    title: "Kantara A Legend: Chapter 1",
    genre: "Action / Mythology",
    releaseYear: 2025,
    duration: "2h 45m",
    language: "Kannada",
    director: "Rishab Shetty",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNDU2ZTYxYTMtMjhlZC00ZjEwLThhNDUtMzdlNWM4ZDcyYTM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Explores the origins of Kaadubettu Shiva during the Kadamba dynasty era.",
    cast: [{ name: "Rishab Shetty" }],
  },
  {
    title: "Lokah Chapter One: Chandra",
    genre: "Drama / Mystery",
    releaseYear: 2025,
    duration: "2h 31m",
    language: "Malayalam",
    director: "Vinay Govind",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZThiYjY3ODUtOGM4Yy00OGE0LTliM2UtYjFlNDY0Mzg3OWJlXkEyXkFqcGc@._V1_.jpg",
    description: "A mysterious journey of Chandra and the truths around her.",
    cast: [
      { name: "Naslen" },
      { name: "Chandu Salimkumar" },
      { name: "Arun Kurian" },
      { name: "Kalyani Priyadarshan" },
    ],
  },
  {
    title: "Idly Kadai",
    genre: "Drama",
    releaseYear: 2025,
    duration: "2h 28m",
    language: "Tamil",
    director: "Suresh Kamatchi",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BM2YyMzhmNjEtZjRhMC00NWMwLWI4YjAtZjQyZTRmZjdmMzU5XkEyXkFqcGc@._V1_.jpg",
    description:
      "A rural man's Dubai dream takes a turn as he rediscovers his roots.",
    cast: [{ name: "Kabilan" }, { name: "Jacki" }, { name: "Dhanush" }],
  },
  {
    title: "Dude",
    genre: "Romance / Drama",
    releaseYear: 2025,
    duration: "2h 20m",
    language: "Tamil",
    director: "Pradeep Ranganathan",
    thumbnail:
      "https://img.studioflicks.com/wp-content/uploads/2025/05/11194832/Dude-Movie-HD-Second-Look-Poster.jpeg",
    description: "A friendship and love conflict between Agan and Kural.",
    cast: [{ name: "Pradeep Ranganathan" }],
  },
  {
    title: "Mirai",
    genre: "Fantasy / Action",
    releaseYear: 2025,
    duration: "2h 49m",
    language: "Telugu",
    director: "Karthik Gattamneni",
    thumbnail:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00395402-wehawurecb-portrait.jpg",
    description:
      "A warrior must protect nine sacred scriptures capable of turning mortals into gods.",
    cast: [{ name: "Teja Sajja" }],
  },
  {
    title: "They Call Him OG",
    genre: "Crime / Action",
    releaseYear: 2025,
    duration: "2h 35m",
    language: "Telugu",
    director: "Sujeeth",
    thumbnail: "https://i.redd.it/5ygr5vsgp5rf1.jpeg",
    description:
      "Mob boss Ojas Gambheera returns after a decade for vengeance.",
    cast: [{ name: "Pawan Kalyan" }],
  },
  {
    title: "KGF Chapter 2",
    genre: "Action / Drama",
    releaseYear: 2022,
    duration: "2h 48m",
    language: "Kannada",
    director: "Prashanth Neel",
    thumbnail:
      "https://wallpapers.com/images/hd/cool-kgf-chapter-2-poster-0axobl2ual8wurln.jpg",
    description:
      "Rocky faces political forces and deadly enemies while ruling KGF.",
    cast: [
      { name: "Yash" },
      { name: "Sanjay Dutt" },
      { name: "Raveena Tandon" },
      { name: "Srinidhi Shetty" },
    ],
  },
  {
    title: "The Girlfriend",
    genre: "Romance / Slice of Life",
    releaseYear: 2025,
    duration: "2h 30m",
    language: "Telugu",
    director: "K. Naresh",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMTg3ODIwMjgtNWQ5MC00MDlkLWIzOWItMTY5M2UwN2JlZmE1XkEyXkFqcGc@._V1_.jpg",
    description: "A story about love, compatibility and self-discovery.",
    cast: [{ name: "Rashmika Mandanna" }],
  },
  {
    title: "Pushpa 2: The Rule",
    genre: "Action / Crime",
    releaseYear: 2024,
    duration: "2h 56m",
    language: "Telugu",
    director: "Sukumar",
    thumbnail: "https://pbs.twimg.com/media/FtHLJbyaMAAeheg.jpg",
    description:
      "Pushpa rises to power and faces new enemies and political wars.",
    cast: [
      { name: "Allu Arjun" },
      { name: "Rashmika Mandanna" },
      { name: "Fahadh Faasil" },
    ],
  },
  {
    title: "Coolie",
    genre: "Action / Drama",
    releaseYear: 2025,
    duration: "2h 48m",
    language: "Tamil",
    director: "Lokesh Kanagaraj",
    thumbnail:
      "https://thefanboy.in/cdn/shop/articles/coolie_poster_6d5f888e-aeab-4e22-b3fe-48e971375877.jpg?v=1752221470",
    description: "A man’s lifelong quest for vengeance shapes his destiny.",
    cast: [
      { name: "Rajinikanth" },
      { name: "Aamir Khan" },
      { name: "Nagarjuna Akkineni" },
    ],
  },
  {
    title: "Brat",
    genre: "Drama / Romance",
    releaseYear: 2025,
    duration: "2h 35m",
    language: "Kannada",
    director: "Krishna",
    thumbnail:
      "https://images.filmibeat.com/img/popcorn/movie_posters/brat-20251031170324-23631.jpg",
    description: "A coming-of-age journey filled with emotional conflicts.",
    cast: [{ name: "Darling Krishna" }],
  },
];

const seedDB = async () => {
  await Movie.deleteMany({});
  console.log("Old movies removed");

  await Movie.insertMany(movies);
  console.log("Movies seeded successfully!");

  mongoose.connection.close();
};

seedDB();
