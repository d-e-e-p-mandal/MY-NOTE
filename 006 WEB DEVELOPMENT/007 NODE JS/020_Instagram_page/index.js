import express from "express";
const app = express();

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { readFile } from "fs/promises";

let port = 3000;



// For __dirname in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port,()=>{
    console.log("sever starting............. exit for (mac : control+c )");
    
});
app.get("/ig/:username",async (req,res)=>{
    let {username} = req.params;
    console.log(username);
    // const instaData = require("./data.json");
    // const dataRaw = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
    // const instaData = JSON.parse(dataRaw);

    const dataRaw = await readFile(path.join(__dirname, "data.json"), "utf-8");
    const instaData = JSON.parse(dataRaw);
    let data = instaData[username];

    console.log(data);
    res.render("insta_profile.ejs",{data});
});