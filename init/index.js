const mongoose = require('mongoose');
const initData=require("./data.js");
const Listing = require('../models/listing');

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
  main()
.then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.error("connection error", err);
  });
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj) => ({...obj, owner: "688d9d1a9950404274a80c61" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
}
initDB();



