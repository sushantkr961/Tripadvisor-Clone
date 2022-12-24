"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const connectDb_1 = __importDefault(require("./src/config/connectDb"));
const user_routes_1 = __importDefault(require("./src/routes/UserRoutes/user.routes"));
const hotel_routes_1 = __importDefault(require("./src/routes/HotelRoutes/hotel.routes"));
const app = (0, express_1.default)();
const mongoUrl = process.env.MONGO_URL || "";
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.all("/", (req, res) => res.send("Wroking Home Route"));
app.use("/user", user_routes_1.default);
app.use("/hotel", hotel_routes_1.default);
(0, connectDb_1.default)(mongoUrl);
app.listen(port, () => {
    console.log("Connected to PORT", port);
});
