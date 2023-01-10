const express = require('express');
const PORT=process.env.PORT|| 9000;
const app=express();
const rooms=[
    {hallno:1,
    no_of_seats:250,
    amenities:["good parking","side garden","Rest Room", "Air-conditioned"],
    price_per_hr:4000
 },
 {hallno:2,
    no_of_seats:50,
    amenities:["good parking","side garden","Rest Room", "Air-conditioned"],
    price_per_hr:1000
 },
 {hallno:3,
    no_of_seats:100,
    amenities:["good parking","Rest Room", "Air-conditioned"],
    price_per_hr:2000
 },
 {hallno:4,
    no_of_seats:500,
    amenities:["good parking","side garden","Rest Room", "Air-conditioned"],
    price_per_hr:6000
 },
 {hallno:5,
    no_of_seats:1000,
    amenities:["good parking","side garden","Rest Room", "Air-conditioned"],
    price_per_hr:8000
 }
]


const boooking_room=[
   {
      "customer_name":"Ramesh",
      "date":"2012-04-23",
      "start_time":"11:34:00",
      "end_time":"18:00:35",
      "status": "booked",
      "hallno":2
   },
   {
      "customer_name":"suresh",
      "date":"2022-11-15",
      "start_time":"11:34:00",
      "end_time":"18:00:35",
      "status": "booked",
      "hallno":4
   },
   {
      "customer_name":"mahesh",
      "date":"2022-10-04",
      "start_time":"11:34:00",
      "end_time":"18:00:35",
      "status": "booked",
      "hallno":5
   },
   {
      "customer_name":"Jithesh",
      "date":"2022-10-04",
      "start_time":"11:34:00",
      "end_time":"18:00:35",
      "status": "booked",
      "hallno":1
   },
   {
      "customer_name":"ganesh",
      "date":"2022-10-12",
      "start_time":"11:34:00",
      "end_time":"18:00:35",
      "status": "booked",
      "hallno":3
   }
]

app.get("/", (req,res)=>{
   res.send("WELCOME TO HALL BOOKING")
})
//this is for------------------- /rooms
// app.get("/rooms", (req,res)=>{res.send(rooms)})
//this is for------------------- /rooms/:id
app.get("/rooms/:id", (req,res)=>{
    console.log(req.params);
    const {id}= req.params;
    console.log(id);
    const room=rooms.find((mv)=>mv.hallno==id)
    res.send(room);
})
// this for room and query parameter
app.get("/rooms",(req,res)=>{
   const roomno =req.query;
    console.log(req.query,roomno.no_of_seats,roomno.price_per_hr);
   let filterdrooms=rooms;
    if(roomno.no_of_seats){filterdrooms=rooms.find((rm)=>rm.no_of_seats==roomno.no_of_seats)}
    if(roomno.price_per_hr){filterdrooms=rooms.find((rm)=>rm.price_per_hr==roomno.price_per_hr)}
    res.send(filterdrooms)

})

    
// To get customer deatils

app.get("/booking",(req,res)=>{
   console.log("this is a booking request")
   res.send(boooking_room);

})

app.get("/booking/:dt", (req,res)=>{
   console.log(req.params);
   const {dt}= req.params;
   console.log(dt,req.params);
   const bookrm=boooking_room.find((mv)=>mv.date==dt)
   res.send(bookrm);
})



// Create and start the server 
app.listen(PORT,()=>console.log("server started in port :",PORT));