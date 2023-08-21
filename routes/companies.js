const express = require("express");
const Company = require("../models/company");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const company = await Company.create({
            name: req.body.name,
        });
        console.log(company);
        res.status(201).json(company);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

module.exports = router;
