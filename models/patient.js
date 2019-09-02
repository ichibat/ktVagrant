"use strict";
const loader = require("./sequelize-loader");
const Sequelize = loader.Sequelize;

const Patient = loader.database.define(
  "patients",
  {
    patientID: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    patientFName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    patientLName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Patient;
