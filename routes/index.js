"use strict";

const express = require("express");
const router = express.Router();
const KtmScore = require("../models/ktmScore");

/* GET home page. */
router.get("/", function(req, res, next) {
  const title = "KT法";
  if (req.user) {
    KtmScore.findAll({
      where: {
        createdBy: req.user.id
      },
      order: [['"updatedAt"', "DESC"]]
    }).then(ktmScores => {
      res.render("index", {
        title: title,
        user: req.user,
        ktmScores: ktmScores
      });
    });
  } else {
    res.render("index", { title: title, user: req.user });
  }
});

module.exports = router;
