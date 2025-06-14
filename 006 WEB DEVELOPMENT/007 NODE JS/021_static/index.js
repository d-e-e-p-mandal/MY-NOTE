// const express = require("express");
// const path = require("path");
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { readFile } from "fs/promises";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let port = 3000;
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(port,()=>{
    console.log("server started.........");
});

app.get("/:username",async(req,res)=>{
    let {username} = req.params;
    // let dataRaw = require("./data.json");
    //  const dataRaw = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
    //  const instaData = JSON.parse(dataRaw);
    const dataRaw = await readFile(path.join(__dirname, "data.json"), "utf-8");
    const instaData = JSON.parse(dataRaw);

    let data = instaData[username];
    res.render("home.ejs",{data});
});