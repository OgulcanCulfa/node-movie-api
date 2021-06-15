const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Models

const Director = require("../models/Director");

router.get("/", (req, res) => {
  Director.aggregate([
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "director_id",
        as: "movies",
      },
    },
    {
      $unwind: {
        path: "$movies",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: {
          id: "$_id",
          name: "$name",
          surname: "$surname",
          bio: "$bio",
        },

        movies: {
          $push: "$movies",
        },
      },
    },

    {
      $project: {
        _id: "$_id._id",
        name: "$_id.name",
        surname: "$_id.surname",
        movies: "$movies",
      },
    },
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:director_id", (req, res) => {
  Director.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(req.params.director_id),
      },
    },

    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "director_id",
        as: "movies",
      },
    },
    {
      $unwind: {
        path: "$movies",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: {
          id: "$_id",
          name: "$name",
          surname: "$surname",
          bio: "$bio",
        },

        movies: {
          $push: "$movies",
        },
      },
    },

    {
      $project: {
        _id: "$_id.id",
        name: "$_id.name",
        surname: "$_id.surname",
        movies: "$movies",
      },
    },
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Add Director

router.post("/", (req, res) => {
  new Director(req.body)
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
