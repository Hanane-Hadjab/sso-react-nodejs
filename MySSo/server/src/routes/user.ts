import express  from "express";
import passport from "passport";
const { isUserAuthenticated } = require("../middlewares/auth");
const app = express();

app.get(
  "/api/v1/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);



app.get(
  "/api/v1/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again",
    failureRedirect: process.env.ERROR_LOGIN_URL,
    successRedirect: process.env.SUCCESS_LOGIN_URL,
  }),
  function (req, res) {
    res.send("Thank you for signing in!");
  }
);

app.get("/api/v1/auth/user", isUserAuthenticated, (req, res) => {
  res.json(req.user);
});

module.exports = app;