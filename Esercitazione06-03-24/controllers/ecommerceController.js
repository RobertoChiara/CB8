const data = {
  tshirt: require("../models/tshirt.json"),
  setsTshirt: (data) => {
    this.tshirt = data;
  },
};

const getTshirtUomo = (req, res) => {
  const filteredTshirtUomo = data.tshirt.uomo.filter((tshirt) => tshirt);
  res.json(filteredTshirtUomo);
};
const getTshirtDonna = (req, res) => {
  const filteredTshirtDonna = data.tshirt.donna.filter((tshirt) => tshirt);
  res.json(filteredTshirtDonna);
};
const getTshirtBambino = (req, res) => {
  const filteredTshirtBambino = data.tshirt.bambino.filter((tshirt) => tshirt);
  res.json(filteredTshirtBambino);
};

module.exports = {
  data,
  getTshirtUomo,
  getTshirtDonna,
  getTshirtBambino,
};
