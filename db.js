
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/TodoApp_27_Mar_2025");


const todoSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model("todos", todoSchema);

module.exports={
    todos,
}