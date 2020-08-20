const express = require('express');
const router = express.Router();

// Models

const Director = require("../models/Director");


router.get('/', (req, res, next) => {
  res.json({title: "express"});
});

// Director add

router.post('/', (req, res, next) => {
  const director_add = new Director(req.body);
  const promise  = director_add.save();

  promise.then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.json(err);
  })
});


module.exports = router;
