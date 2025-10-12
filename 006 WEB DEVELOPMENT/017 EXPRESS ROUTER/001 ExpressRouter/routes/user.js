const express = require("express");
const router = express.Router();

// Index - users
router.get("/", (req, res)=>{
    res.send("Get for users");
});

router.get("/:id", (req, res)=>{
    res.send("Get id for users");
});

router.post("/", (req, res)=>{
    res.send("Post for users");
});

router.delete("/:id", (req, res)=>{
    res.send("Delete for users");
});

module.exports = router;