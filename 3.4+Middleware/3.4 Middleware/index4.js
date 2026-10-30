import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bodyname='';
app.use(bodyParser.urlencoded({ extended: true }));

let bandnamege=(req,res,next)=>{
  console.log(req.body);
  bodyname= req.body["street"]+req.body["pet"];
  next();
};

app.use(bandnamege);

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit',(req,res)=>{
    res.send(`<h1>Your band nameis:</h1><h2>${bodyname}</h2>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
