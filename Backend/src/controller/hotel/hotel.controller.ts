import { Request, Response } from "express";
import HotelModel from "../../modules/Hotel/hotel.module";
import { resolveSoa } from "dns";

class hotelController {
  static queryHotel = async (req: Request, res: Response) => {
    const { query } = req.query;
    const searchedCity = await HotelModel.find({ city: query });
    res.send({ hotels: searchedCity });
  };

  static hotelList = async (req: Request, res: Response) => {
    const hotelList = await HotelModel.find();
    res.send({ result: hotelList });
  };

  static singleHotel = async (req: Request, res: Response) => {
    const id = req.params.id;

    const hotel = await HotelModel.findById(id);
    res.send(hotel);
  };

  static adminPostHotel = async (req: Request, res: Response) => {
    const { city, title, country, images_large } = req.body;

    if (city && title && country) {
      try {
        const postHotel = new HotelModel({
          city,
          title,
          country,
          images_large,
        });
        console.log(postHotel);
        await postHotel.save();
        res.status(201).send("Success");
      } catch (err) {
        console.error;
        res.status(400).send("Some error occured");
      }
    } else {
      res.status(401).send("All fields are required");
    }
  };
}

export default hotelController;
