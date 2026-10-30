import express from "express";

const app = express();
const port = 3000;

let logger=(req,res,next)=>{
  console.log(req.method);
  console.log("request url is:",req.url);
  next();
}

app.use(logger);

//if we didnt keep next method then it will never reach to the get method
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
