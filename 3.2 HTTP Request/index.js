import express  from "express";

const app=express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h3>Hi this is main page's</h3><h1>Hello</h1>");
    console.log(req.rawHeaders);
});
app.get("/home",(req,res)=>{
    res.send("Hi this home page");
    // res.send(req.rawHeaders);
});

app.get("/side",(req,res)=>{
    res.send("Hi this is side page");
});

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
});

