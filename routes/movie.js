const express = require('express');
const router = express.Router();

// Models

const Movie = require("../models/Movie");


// Top 10

router.get("/top10", (req,res) => {
  const top_ten = Movie.find().limit(10).sort({ imdb_score: -1 });
  top_ten.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});



// Get all movies

router.get("/", (req,res) => {
  const movie_find = Movie.find();
  movie_find.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});




// Get movie by id

router.get("/:movie_id", (req,res,next) => {
  const query = Movie.findById(req.params.movie_id);
  query.then((movie) => {
    if (!movie)
      next({ message: "The movie was not found" })
    res.json(movie)
  })
  .catch((err) => {
    res.json(err);
  });
});


// Update movie

router.put("/:movie_id", (req,res,next) => {
  const update = Movie.findByIdAndUpdate(req.params.movie_id, req.body,{new: true});
  update.then((movie) => {
    if (!movie)
      next({ message: "The movie was not found" });
    res.json(movie)
    
    
  })
  .catch((err) => {
    res.json(err);
  });
});


// Delete movie

router.delete("/:movie_id", (req,res,next) => {
  const remove = Movie.findByIdAndRemove(req.params.movie_id, req.body);
  remove.then((movie) => {
    if (!movie)
      next({ message: "The movie was not found" });
    res.json(movie);
    
    
  })
  .catch((err) => {
    res.json(err);
  });
});






// Add a movie

router.post('/', (req, res, next) => {

  // const { title, imdb_score, category, country, year } = req.body;

  const movie = new Movie(req.body);

  const promise = movie.save();
  promise
  .then((data) => {res.json(data)})
  .catch((err) => {res.json(err)});
  
 
});


// Year Difference between movies

router.get("/between/:start_year/:end_year", (req,res) => {
  const {start_year, end_year} = req.params;
  const between = Movie.find(
    {
      year: { "$gte": parseInt(start_year), "$lte": parseInt(end_year) }
    });
  between.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});









module.exports = router;
