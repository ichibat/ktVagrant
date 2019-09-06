"use strict";
const loader = require("./sequelize-loader");
const Sequelize = loader.Sequelize;

const KtmScore = loader.database.define(
  "ktmScores",
  {
    ktmScoreId: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    patientID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Q1Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q2Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q3Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q4Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q5Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q6Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q7Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q8Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q9Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q10Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q11Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q12Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Q13Value: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdBy: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ["createdBy"]
      }
    ]
  }
);

module.exports = KtmScore;
