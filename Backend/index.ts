import express, { Request } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./src/config/connectDb";
import userRoutes from "./src/routes/UserRoutes/user.routes";
import hotelRoutes from "./src/routes/HotelRoutes/hotel.routes";
const app = express();

const mongoUrl = process.env.MONGO_URL || "";
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.all("/", (req, res) => res.send("Wroking Home Route"));

app.use("/user", userRoutes);
app.use("/hotel", hotelRoutes);

connectDb(mongoUrl);

app.listen(port, () => {
  console.log("Connected to PORT", port);
});
