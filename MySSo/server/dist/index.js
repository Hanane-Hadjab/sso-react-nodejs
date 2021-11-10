"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require('./controllers/passport');
const middlewares = require("./middlewares");
const api = require("./routes/user");
mongoose_1.default
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@addworking-bo-dev.udsgr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
})
    .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Access-Control-Allow-Headers");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
app.use((0, express_session_1.default)({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
});
//# sourceMappingURL=index.js.map