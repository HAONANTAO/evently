 import mongoose from "mongoose"

 const MONGODB_URL = process.env.MONGODB_URL
// in serverless function need to reduce the many connection 
//  初始化缓存，使用global避开严格ts检查
 let cached = (global as any).mongoose || {conn:null,promise:null}

 export const connectToDatabase = async()=>{
  // 有就直接拿
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error("MONGODB_URL is missing!")

    // 给一个链接db的promise任务
    cached.promise = cached.promise || mongoose.connect(MONGODB_URL,{
      dbName:"evently",
      // 这通常在数据库连接不稳定或者在启动时数据库尚未准备好时有用，以避免在连接实际建立之前缓存太多命令。
      bufferCommands:false,
    })
    // waiting connection
    cached.conn = await cached.promise;
    return cached.conn
 }
