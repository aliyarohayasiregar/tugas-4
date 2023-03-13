import express from "express";
import { client } from "./db.js";

const app=express();
app.use(express.static("public"));
app.use(express.json());


app.use((req,res,next)=>{
    if(req.url=="/aliya"){
        console.log("aliya");
    }
    console.log(req.url);
    next();
});


//route
app.get("/api/aliya",(req,res)=>{
    res.send("aliya");
});

app.get("/api/planet",async(req,res)=>{
    const results=await client.query("SELECT * FROM planet");
    res.send(results.rows);
});


app.listen(3000,()=>{
    console.log("server sedang berjalan");
});

