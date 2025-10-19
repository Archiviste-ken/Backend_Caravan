import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ] // Array of Sub-Todos

},{timestamps: true})
 
export const Todo = mongoose.model("Todo",todoSchema)

// when the data model will get stored in mongoDB then it will stored as todos.
// lowercase and last mai s.