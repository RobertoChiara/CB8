const express = require("express");
const router = express.Router();
const { data } = require("../controllers/ecommerceController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/uomo", async (req, res) => {
  res.render("uomo", { products: data.tshirt.uomo, title: "Uomo" });
});
router.get("/donna", async (req, res) => {
  res.render("donna", { products: data.tshirt.donna, title: "Donna" });
});
router.get("/bambino", async (req, res) => {
  res.render("bambino", { products: data.tshirt.bambino, title: "Bambino" });
});

module.exports = router;
