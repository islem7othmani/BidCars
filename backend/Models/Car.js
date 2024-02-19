const mongoose = require("mongoose");
const CarModel = mongoose.Schema({
   LotNumber: {type:String,required:true},
   VIN: {type:String,required:true},
   TitleCode: {type:String,required:true},
   Odometer: {type:String,required:true},
   PrimaryDamage : {type:String,required:true},
   Cylinders: {type:String,required:true},
   BodyStyle: {type:String,required:true},
   Color: {type:String,required:true},
   EngineType: {type:String,required:true},
   Transmission: {type:String,required:true},
   VehicleType: {type:String,required:true},
   Notes: {type:String,required:true}
},
{timestamps:true}

)
const Car = mongoose.model("Car",CarModel)
module.exports=Car