import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();
require('./controllers/passport')
const middlewares = require("./middlewares");
const api = require("./routes/user");
 
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@addworking-bo-dev.udsgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error: string) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});

