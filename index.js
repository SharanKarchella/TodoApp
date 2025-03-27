
import express from "express"
import {createTodo, updateTodo} from "./types"
const {todos} = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async(req,res)=>{

    //validation -- checking with types.js

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return
    }

    //put it in mongodb
    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
    })
})

app.get("/todos", async(req,res)=>{
    //get it from db-todos
    const todosF = await todos.find({});
    res.json({
        todosF
    })
    
})

app.put("/completed", async(req,res)=>{

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Cannot update check it!"
        }) 
        return
    }
    //put it in mongodb
    await todos.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
       
})

app.listen('4000',()=>{
    console.log("Server started on 4000")
})