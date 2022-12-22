const express = require("express");
const Hotel = require("../hotel/hotel.model");

const app = express.Router();

//::::::::::::::::::::::::::::: CREATE A HOTEL ::::::::::::::::::::::::
 
app.post("/",async(req,res)=>{
    console.log(req.body)
const {name,type,city,state,address,photos,title,desc,rating,reviewCount,rooms,cheapestPrice,featured}=req.body;
try{
 let newHotel= await Hotel.create({name,type,city,state,address,photos,title,desc,rating,reviewCount,rooms,cheapestPrice,featured})
       res.send("Hotel data store success fulll")
}catch(e){
    res.send("falid to Upload data")
}
})

//:::::::::::::::::::::::::::::: FIND HOTELS BY CITY NAME :::::::::::::::::::::::::::::::::::::::
app.get("/:city",async(req,res)=>{
console.log(typeof(req.params.city))
  const {city}=req.params;

try{
    let findHotel=await Hotel.find({city:city})
    res.send(findHotel)

}catch(e){
res.send("no any hotel found in this city")
}
})



//:::::::::::::::::::::::::::::::::::::: FIND ALL HOTELS :::::::::::::::::::::::::::::::::::::::::::::

app.get("/",async(req,res)=>{

try{
      let allHotel=await Hotel.find()
      res.send(allHotel)
  
  }catch(e){
  res.send(e.message)
  }
  })


//:::::::::::::::::::::::::::::::::::::::::::::: FIND HOTEL BY ID :::::::::::::::::::::::::::::::::


    app.get("/id/:id",async(req,res)=>{

        const {id}=req.params; 
      console.log(id)
      try{
          let findHotelById=await Hotel.find({_id:id})
          res.send(findHotelById)
      
      }catch(e){
      res.send("no any hotel found in this city")
      }
      })

      
//:::::::::::::::::::::::::::::::::::::::: Find By Id And Upadte ::::::::::::::::::::::::::::::::::::::::
app.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { checkin } = req.body;
    console.log(checkin)
    const update=await Hotel.updateOne({_id:id},{state_slug:checkin})
    res.send(update)
  });




module.exports=app
