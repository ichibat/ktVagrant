"use strict";
const express = require("express");
const router = express.Router();
const authenticationEnsurer = require("./authentication-ensurer");
const uuid = require("uuid");
const KtmData = require("../models/ktm-data");

router.get("/new", authenticationEnsurer, (req, res, next) => {
  res.render("new", { user: req.user });
});

router.post("/", authenticationEnsurer, (req, res, next) => {
  const ktmDataId = uuid.v4();
  const updatedAt = new Date();

  console.log(ktmDataId);
  console.log(updatedAt);
  console.log(req.body.examinationDate);
});

module.exports = router;
