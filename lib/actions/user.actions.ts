'use server'
import { CreateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"
//backend logic
export const createUser = async(user:CreateUserParams)=>{
    try {
      // serverless function
      await connectToDatabase();

      const newUser = await User.create(user);
      // keep pure
      return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
      handleError(error)
    }
}