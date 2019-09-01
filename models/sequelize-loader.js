"use strict";
const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost/ktm", {
  operatorsAliases: false
});

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
