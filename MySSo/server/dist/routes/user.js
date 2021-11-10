"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const { isUserAuthenticated } = require("../middlewares/auth");
const app = (0, express_1.default)();
app.get("/api/v1/login", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
app.get("/api/v1/auth/google/callback", passport_1.default.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again",
    failureRedirect: process.env.ERROR_LOGIN_URL,
    successRedirect: process.env.SUCCESS_LOGIN_URL,
}), function (req, res) {
    res.send("Thank you for signing in!");
});
app.get("/api/v1/auth/user", isUserAuthenticated, (req, res) => {
    res.json(req.user);
});
module.exports = app;
//# sourceMappingURL=user.js.map