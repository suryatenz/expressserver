import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var ch = false;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let check=(req,res,next)=>{
   if( req.body["password"] == "ILoveProgramming"){
      ch = true;
   }
   next();
};
app.use(check);

app.get("/",(req,res)=>{
   res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
   if(ch){
      res.sendFile(__dirname + "/public/secret.html");
   }
   else{
      console.log("Wrong output");
      res.sendFile(__dirname + "/public/index.html");
   }
});

app.listen(port,()=>{
   console.log(`Server started in ${3000}`);
});


