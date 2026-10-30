import  Express  from "express";

const app =Express();
const port = 3000;

app.get("/",(req,res)=>{
    // res.sendStatus(200);
    const today = new Date();
    const day = today.getDay();

    let da = " This is sunday";
    let h = "Enjoy this weekend";

    if(day != 6){
        da="This is weekday";
        h="Lets Work";
    }
    res.render('index.ejs',
    {datetype:da,
    act:h}
    );
});

app.listen(port,()=>{
    console.log("Listening to port 3000");
});
