import express from "express";

const app = express();
let port = 3000;
app.listen(port,()=>{
   console.log(`listing server .......${port} `);
});
app.get("/",(req,res)=>{
    res.send("suman botila");
});


app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    res.send(q);
}
);

