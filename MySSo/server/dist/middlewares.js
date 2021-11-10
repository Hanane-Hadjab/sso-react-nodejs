"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
function notFound(req, res, next) {
    res.status(404);
    const error = new mongoose_1.Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}
/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    });
}
module.exports = {
    notFound,
    errorHandler,
};
//# sourceMappingURL=middlewares.js.map