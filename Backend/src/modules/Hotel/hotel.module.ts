import mongoose from "mongoose";

const hotelImages = [
  "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19620665/villas-front-view_mid_thumbnail.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19620665/971862_695102490516547_1654902614_n_mid_thumbnail.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19620665/villa1_mid_thumbnail.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19620665/villa7_mid_thumbnail.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/19620665/villa5_mid_thumbnail.jpeg",
];

const hotelSchema = new mongoose.Schema({
  city_slug: { type: String, default: true },
  instant_bookable: { type: Boolean, default: true },
  ac: { type: Boolean, default: true },
  cook_on_call: { type: Boolean, default: true },
  internet: { type: Boolean, default: true },
  gym: { type: Boolean, default: true },
  created_on: { type: Boolean, default: true },
  city: { type: String, required: true, trim: true },
  images_large: { type: Array, default: hotelImages },
  id: { type: String, default: Math.floor(Math.random() * 100000) },
  property_type: { type: String, default: "Hotel" },
  title: { type: String, required: true },
  country: { type: String, required: true, default: "India" },
  number_of_bathrooms: { type: Number, default: 1 },
  country_slug: { type: String, default: "India" },
  starting_price_in_usd: { type: Number, default: 120 },
  occupancy: { type: Number, default: 4 },
  lng: { type: Number, default: 73.7700337172 },
  lat: { type: Number, default: 15.5169558574 },
  units: { type: String, default: 1 },
  dish_washer: { type: Boolean, default: true },
  availability_pct: { type: Number, default: Math.random() * 20 },
  slug: { type: String, default: "Single Bed Room with AC" },
  prop_tags: {
    type: Array,
    default: ["Apartment", "1 BR", "1 Bath", "Swimming Pool", "TV", "AC"],
  },
  currency: { type: String, default: "INR" },
});

const HotelModel = mongoose.model("hotel", hotelSchema);

export default HotelModel;
