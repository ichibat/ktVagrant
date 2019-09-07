"use strict";
const express = require("express");
const router = express.Router();
const authenticationEnsurer = require("./authentication-ensurer");
const uuid = require("uuid");
const KtmScore = require("../models/ktmScore");

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

  KtmScore.create({
    ktmScoreId: ktmScoreId,
    patientID: req.body.patientID.slice(0, 255) || "（未入力）",
    Q1Value: req.body.question1,
    Q2Value: req.body.question2,
    Q3Value: req.body.question3,
    Q4Value: req.body.question4,
    Q5Value: req.body.question5,
    Q6Value: req.body.question6,
    Q7Value: req.body.question7,
    Q8Value: req.body.question8,
    Q9Value: req.body.question9,
    Q10Value: req.body.question10,
    Q11Value: req.body.question11,
    Q12Value: req.body.question12,
    Q13Value: req.body.question13,
    createdBy: req.user.id,
    updatedAt: updatedAt
  }).then(ktmScore => {
    console.log(ktmScore.ktmScoreId);
    console.log("reached internally!");
    res.redirect("/ktmScores/" + ktmScore.ktmScoreId);
  });
});

module.exports = router;
