const express = require("express");

const router = express.Router();

const {
    analyzePage
} = require("../controllers/auditController");


router.post("/", analyzePage);


module.exports = router;