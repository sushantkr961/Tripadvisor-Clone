import { Request, Response } from "express";
import HotelModel from "../../modules/Hotel/hotel.module";
import { resolveSoa } from "dns";

class hotelController {
  static hotelList = async (req: Request, res: Response) => {
    const hotelList = await HotelModel.find({});
    res.send({ result: hotelList });
  };

  static singleHotel = async (req: Request, res: Response) => {
    const id = req.params.id;

    const hotel = await HotelModel.findById(id);
    res.send(hotel);
  };

  static adminPostHotel = async (req: Request, res: Response) => {
    const { city, title, country } = req.body;

    if (city && title && country) {
      const postHotel = new HotelModel({ city, title, country });
      console.log(postHotel);
      await postHotel.save();
      res.status(201).send("SUCCESS");
    } else {
      res.status(401).send("NOT SUCCESS");
    }
  };
}

export default hotelController;
