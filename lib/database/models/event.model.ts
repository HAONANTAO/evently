import { url } from "inspector";
import { model, models, Schema } from "mongoose";

export interface IEvent extends Document{
  _id: string,
  title: string,
  description: string,
  location: Location,
  createdAt: Date,
  imageUrl: string,
  startDateTime: Date,
  endDateTime: Date,
  price: number,
  isFree: boolean,
  url: string,
  category: { _id: string, name: string },
  organizer: { _id: string, firstName: string, lastName: string }
}
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