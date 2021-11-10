import passport from "passport";
const GoogleStragegy = require("passport-google-oauth20").Strategy;
import mongoose, { Document, Error } from "mongoose";
import { UserInterface } from "../interfaces/UserInterface";
import User from "../models/User";


passport.use(
    new GoogleStragegy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true,
      },
      async (
        req: any,
        accessToken: string,
        refreshToken: string,
        profile: any,
        cb: any
      ) => {
        const defaultUser = {
          fullName: `${profile.name.givenName} ${profile.name.familyName}`,
          email: profile.emails[0].value,
          googleId: profile.id,
        }
  
        let user: UserInterface;
        User.findOne({ email: defaultUser.email })
          .then((userInBase) => {
            if (!userInBase) {
              let user = defaultUser
              User.create(defaultUser);
              console.log("user created");
              return cb(null, user)
            } else {
              console.log("User already exists");
                let user = userInBase;
                console.log(user.email);
              return cb(null, user)
            }
          })
          .catch((err) => {
            console.log("error signing up", err);
            return cb(err, user);
          });
  
      }
    )
  );
  
  passport.serializeUser((user: any, cb) => {
    cb(null, user.id);
  });
  
  passport.deserializeUser(async (id: any, cb) => {
    const user = await User.findById(id).catch((err) => {
      console.log("error deserializing", err);
      cb(err, null)
    });
    if (user) cb(null, user);
  });