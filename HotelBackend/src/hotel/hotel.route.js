const express = require("express");
const Hotel = require("../hotel/hotel.model");

const app = express.Router();

//::::::::::::::::::::::::::::: CREATE A HOTEL ::::::::::::::::::::::::
 
app.post("/",async(req,res)=>{
    console.log(req.body)
const {name,type,city,state,address,photos,title,desc,rating,reviewCount,rooms,cheapestPrice,featured,ac}=req.body;
try{
 let newHotel= await Hotel.create({name,type,city,state,address,photos,title,desc,rating,reviewCount,rooms,cheapestPrice,featured,ac})
       res.send(newHotel)
}catch(e){
    res.send("falid to Upload data")
}
})

//:::::::::::::::::::::::::::::: FIND HOTELS BY CITY NAME ::::::::::::::::::::::::::::::::::::::::::

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
    const {title} = req.body;

    try{
        const update=await Hotel.findOneAndUpdate({_id:id},{title:title})
    res.send(update)
    }
    catch(e){
        res.send("Data Note updated")
    }
    });



//::::::::::::::::::::::::::::::::: Delete a Particular hotel by ID ::::::::::::::::::::::::::::::::::::::::::

app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;


    try{
         const deleteHotel=await Hotel.findByIdAndDelete({_id:id})
         res.send("Data deleted Successfully")
    }
    catch(e){
         res.send("Data Not Deleted")
    }
})


//::::::::::::::::::::::::::::::::::::: Filter Data According to Ac :::::::::::::::::::::::::::::::::::::

app.post("/filter",async(req,res)=>{
    const {city,ac}=req.body;
 const AcRooms=await Hotel.find({$and:[{city:city},{ac:ac}]}) 
 res.send(AcRooms)
})


//::::::::::::::::::::::::::::::::::::: sort according to price ::::::::::::::::::::::::::::::::::::::::::

app.get("/sortlth",async(req,res)=>{
    const {city}=req.params
    console.log(city)
try{

    const RatingSort=await Hotel.find({city:city},{$sort:{review_rating:1}})

    res.send(RatingSort)
}catch(e){
   res.send("somting wrong")
}
    
})








module.exports=app
