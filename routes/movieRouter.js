const express = require("express");
const router = express.Router();

// Models

const Movie = require("../models/Movie");

// Top 10

router.get("/top10", (req, res) => {
  Movie.find()
    .limit(10)
    .sort({ imdb_score: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get all movies

router.get("/", (req, res) => {
  Movie.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get movie by id

router.get("/:movie_id", (req, res) => {
  Movie.findById(req.params.movie_id)
    .then((movie) => {
      if (!movie) res.status(404).json({ message: "The movie was not found" });
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Update movie

router.put("/:movie_id", (req, res) => {
  const update = Movie.findByIdAndUpdate(req.params.movie_id, req.body, {
    new: true,
  });
  update
    .then((movie) => {
      if (!movie) res.status(404).json({ message: "The movie was not found" });
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Delete movie

router.delete("/:movie_id", (req, res) => {
  const remove = Movie.findByIdAndRemove(req.params.movie_id, req.body);
  remove
    .then((movie) => {
      if (!movie) res.status(404).json({ message: "The movie was not found" });
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add a movie

router.post("/", (req, res, next) => {
  const movie = new Movie(req.body);
  movie
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Year Difference between movies

router.get("/between/:start_year/:end_year", (req, res) => {
  const { start_year, end_year } = req.params;
  Movie.find({
    year: { $gte: parseInt(start_year), $lte: parseInt(end_year) },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
