const express = require("express");
const router = express.Router();

const ecommerceController = require("../../controllers/ecommerceController");

router.route("/uomo").get(ecommerceController.getTshirtUomo);
router.route("/donna").get(ecommerceController.getTshirtDonna);
router.route("/bambino").get(ecommerceController.getTshirtBambino);

module.exports = router;
