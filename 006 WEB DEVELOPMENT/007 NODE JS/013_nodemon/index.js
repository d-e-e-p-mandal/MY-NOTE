import express from 'express';

const app = express();
let port = 3000;
app.listen(port,()=>{
   console.log(`listing server .......${port} `);
});
app.get("/",(req,res)=>{
    res.send("suman botila .......... botila insaan no 1 botila");
});

app.get("/apple",(req,res)=>{
    res.send("apple");
});

// app.get("*",(req,res)=>{ //universal-default-wrog
//     res.send("wrong");
// });
