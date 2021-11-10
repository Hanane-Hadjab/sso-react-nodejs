"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const GoogleStragegy = require("passport-google-oauth20").Strategy;
const User_1 = __importDefault(require("../models/User"));
passport_1.default.use(new GoogleStragegy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        googleId: profile.id,
    };
    let user;
    User_1.default.findOne({ email: defaultUser.email })
        .then((userInBase) => {
        if (!userInBase) {
            let user = defaultUser;
            User_1.default.create(defaultUser);
            console.log("user created");
            return cb(null, user);
        }
        else {
            console.log("User already exists");
            let user = userInBase;
            console.log(user.email);
            return cb(null, user);
        }
    })
        .catch((err) => {
        console.log("error signing up", err);
        return cb(err, user);
    });
})));
passport_1.default.serializeUser((user, cb) => {
    cb(null, user.id);
});
passport_1.default.deserializeUser((id, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(id).catch((err) => {
        console.log("error deserializing", err);
        cb(err, null);
    });
    if (user)
        cb(null, user);
}));
//# sourceMappingURL=passport.js.map