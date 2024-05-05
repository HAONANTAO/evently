import { url } from "inspector";
import { model, models, Schema } from "mongoose";

const EventSchema = new Schema({
  title:{type:String, required:true},
  description:{type:String},
  location:{type:String},
  createdAt:{type:Date, default:Date.now},
  imageUrl:{type:String,required:true},
  startDateTime:{type:Date,required:true,default:Date.now},
  endDateTime:{type:Date,required:true,default:Date.now},
  price:{type:Number,required:true,default:0},
  isFree:{type:Boolean,default:false},
  url:{type:String},
  category:{type:Schema.Types.ObjectId,ref:"Category",required:true},
  organizer:{type:Schema.Types.ObjectId,ref:"User",required:true},
})
const Event = models.Event || model("Event",EventSchema)
export default Event