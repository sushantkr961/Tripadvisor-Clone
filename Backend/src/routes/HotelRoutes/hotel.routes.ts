import express, { Request, Response } from "express";
import hotelController from "../../controller/hotel/hotel.controller";

const hotelRoute = express.Router();

hotelRoute.get("/", hotelController.hotelList);

hotelRoute.get("/:id", hotelController.singleHotel);

hotelRoute.post("/postHotel", hotelController.adminPostHotel);

export default hotelRoute;
