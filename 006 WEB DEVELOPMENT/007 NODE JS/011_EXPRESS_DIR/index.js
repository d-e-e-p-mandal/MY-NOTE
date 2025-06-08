import express from 'express';

const app = express();

let port = 3000;
app.listen(port, () => {
  console.log(`app is listing at port number ${port}`);
});


/* run : To start the server 
app is listing at port number 3000 
Cannot GET /

exit : ^(control) + C
*/

//send response :
app.use((req,res)=>{
    console.log(req); //print request in console
    console.log("request received");
    res.send(`<p style="color:red">Suman love moti</p>`); //send response to the server
});
/*
app is listing at port number 3000
request received
request received
*/