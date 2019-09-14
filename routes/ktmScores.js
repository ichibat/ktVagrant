"use strict";
const express = require("express");
const router = express.Router();
const authenticationEnsurer = require("./authentication-ensurer");
const uuid = require("uuid");
const KtmScore = require("../models/ktmScore");
const User = require("../models/user");

router.get("/new", authenticationEnsurer, (req, res, next) => {
  res.render("new", { user: req.user });
});

router.post("/", authenticationEnsurer, (req, res, next) => {
  const ktmScoreId = uuid.v4();
  const updatedAt = new Date();

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
    console.log(ktmScore.Q1Value);
    console.log("reached internally!");
    res.redirect("/ktmScores/" + ktmScore.ktmScoreId);
  });
});

router.get("/:ktmScoreId", authenticationEnsurer, (req, res, next) => {
  console.log(req.params.ktmScoreId);
  KtmScore.findOne({
    include: [
      {
        model: User,
        attributes: ["userId", "userName"]
      }
    ],
    where: {
      ktmScoreId: req.params.ktmScoreId
    },
    order: [['"updatedAt"', "DESC"]]
  }).then(ktmScore => {
    res.render("ktmScore", {
      ktmScore: ktmScore
    });
  });
});

router.get("/:ktmScoreId/edit", authenticationEnsurer, (req, res, next) => {
  console.log("simple message!");
  console.log(req.params.ktmScoreId);

  KtmScore.findOne({
    where: {
      ktmScoreId: req.params.ktmScoreId
    }
  }).then(ktmScore => {
    if (isMine(req, ktmScore)) {
      // 作成者のみが編集フォームを開ける
      console.log("next is ktmScore");
      console.log(ktmScore);

      res.render("edit", {
        user: req.user,
        ktmScore: ktmScore
      });
    } else {
      const err = new Error("指定されたスコアがない、または権限がありません");
      err.status = 404;
      next(err);
    }
  });
});

function isMine(req, ktmScore) {
  return ktmScore && parseInt(ktmScore.createdBy) === parseInt(req.user.id);
}

router.post("/:ktmScoreId", authenticationEnsurer, (req, res, next) => {
  console.log("just below /:ktmScoreId");
  KtmScore.findOne({
    where: {
      ktmScoreId: req.params.ktmScoreId
    }
  }).then(ktmScore => {
    if (ktmScore && isMine(req, ktmScore)) {
      if (parseInt(req.query.edit) === 1) {
        console.log("editing!");
        const updatedAt = new Date();
        ktmScore
          .update({
            ktmScoreId: ktmScore.ktmScoreId,
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
          })
          .then(ktmScore => {
            console.log("editing!editing!");
            console.log(ktmScore.ktmScoreId);
            res.redirect("/ktmScores/" + ktmScore.ktmScoreId);
          });
      } else if (parseInt(req.query.delete) === 1) {
        console.log("delete!");
      } else {
        const err = new Error("不正なリクエストです");
        err.status = 400;
        next(err);
      }
    } else {
      const err = new Error(
        "指定された予定がない、または、編集する権限がありません"
      );
      err.status = 404;
      next(err);
    }
  });
});

module.exports = router;
