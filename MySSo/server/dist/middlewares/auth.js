"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports.isUserAuthenticated = (req, res, next) => {
    if (req.user) {
        next();
    }
    else {
        res.status(401).send("You must login first!");
    }
};
//# sourceMappingURL=auth.js.map