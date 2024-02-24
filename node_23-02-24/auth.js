const authorize = (req, res, next) => {
  const { userName } = req.query;

  if (userName === "admin") {
    next();
  } else {
    console.log(userName);
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
