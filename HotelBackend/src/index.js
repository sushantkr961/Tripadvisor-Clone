const express = require('express')
require("dotenv").config();
const connect=require("./dataBase/db.connect.js")
const cors =require("cors")
const app=express()
const hotelRoute = require("./hotel/hotel.route")

const PORT=process.env.PORT;


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())




 app.use("/hotel",hotelRoute);


 app.get('/',(req,res)=>res.send('hello server started'))


app.listen(PORT,async()=>{
   
    await connect()
   
   console.log(`Listening at http://localhost:${PORT}`)
})