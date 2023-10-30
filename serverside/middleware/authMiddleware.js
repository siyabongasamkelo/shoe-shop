const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodedToken) => {
      if (err) {
        console.log(err);
        console.log("you're not logged in");
        res.redirect("/");
      } else {
        req.user = decodedToken;
        console.log("you're logged in");
        next();
      }
    });
  } else {
    console.log("you're not logged in");
    res.redirect("/");
  }
};

module.exports = { requireAuth };
