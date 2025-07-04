import express from "express";

const app = express();
let port = 3000;
app.listen(port,()=>{
   console.log(`listing server .......${port} `);
});
app.get("/",(req,res)=>{
    res.send("suman botila");
});


app.get("/:username/:id",(req,res,next)=>{
  //  console.log(req.params);
    let {username,id} = req.params;
    res.write(`${username} this page next call ${id}  => \n`);
    next();
},

(req,res)=>{
    res.end("hlw world");
}
);

