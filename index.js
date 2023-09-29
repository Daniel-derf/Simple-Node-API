const express = require("express");
const server = express();
const movies = require("./src/data/movies.json");

server.get("/", (req, res) => {
  return res.json({ message: "API is working" });
});

server.get("/movies", (req, res) => {
  return res.json(movies);
});

server.listen(3000, () => {
  console.log("Server is working...");
});
