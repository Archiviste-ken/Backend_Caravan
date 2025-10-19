// these 3 steps are mandatory for every code.
import mongoose from "mongoose" // first import the mongoose from mongoose.

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true
        }

},{timestamps: true}
        // why timestamps? because of two timestamps are there i.e. createdAt and updatedAt
) // Then will create a schema. Here adding new is compulsory

export const User = mongoose.model("User" ,userSchema)   // the model seeks two parameters while making the data model which is (kya model banau, kiske base pe model banau? )
// here model is a data method
// here the reason of export const User because we wil be using this model or schema from this very file itself.