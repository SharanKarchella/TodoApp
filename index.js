
import express from "express"
import {createTodo, updateTodo} from "./types"

const app = express();

app.post("/todo", (req,res)=>{
    //validation -- checking with types.js
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload){
        res.status(411).json({
            msg: "You have sent the wrong inputs";
        })
        return
    }
})

app.get("/todos", (req,res)=>{
    
})

app.put("/completed", (req,res)=>{

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload){
        res.status(411).json({
            msg:
        })
    }
    
})

app.listen('4000',()=>{
    console.log("Server started on 4000")
})