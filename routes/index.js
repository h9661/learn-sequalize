var express = require("express");
const { User } = require("../models");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
    const users = await User.findAll();
    res.render("sequelize", { users: users });
});

module.exports = router;
