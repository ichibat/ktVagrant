"use strict";
const express = require("express");
const router = express.Router();
const authenticationEnsurer = require("./authentication-ensurer");
const uuid = require("uuid");
const ktmScore = require("../models/ktmScore");

router.get("/new", authenticationEnsurer, (req, res, next) => {
  res.render("new", { user: req.user });
});

router.post("/", authenticationEnsurer, (req, res, next) => {
  const ktmScoreId = uuid.v4();
  const updatedAt = new Date();

  console.log(ktmScoreId);
  console.log(updatedAt);
  console.log(req.body.examinationDate);
  console.log(req.user);
});

module.exports = router;
