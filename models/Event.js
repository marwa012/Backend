const mongoose = require("mongoose")
const EventSchema= new mongoose.Schema({
 start:Date,
 end:Date,
 title:String,
 disponibilité:String,
 membre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Membres"
},
bureau:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"bureau"

},

})



module.exports = mongoose.model("Event",EventSchema)
