const authorize = (req, res, next) => {
  const { userName } = req.query;
  const { password } = req.query;

  if (userName === "admin" && password === "admin") {
    next();
  } else {
    console.log(userName, password);
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
