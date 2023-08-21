var express = require("express");
const { User } = require("../models");
const Company = require("../models/company");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    const companies = await Company.findAll();
    res.render("sequelize", { users: users, companies: companies });
});

module.exports = router;
