"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        allowNull: true
    },
    email: {
        type: String,
        unique: true
    },
    googleId: {
        type: String,
        unique: true,
        allowNull: true
    }
});
exports.default = mongoose_1.default.model('User', user);
//# sourceMappingURL=User.js.map