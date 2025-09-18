const mongoose = require("mongoose");

// let url = "https://localhost:8080/users";

//mongoose.connect("mongodb://127.0.0.1:27017/test");

// this is the same as before line it working as a async function

main()
  .then(() => {
    console.log("connection successfully");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);
const user1 = new User({
    name : "Adam",
    email : "adam@gmail.com",
    age : 20,
})

user1.save();


const user2 = new User({
    name: "Eve",
    email: "eve@gmail.com",
    age: 22,
});

user2.save()
    .then(() => {
        console.log("✅ User2 saved successfully!");
    })
    .catch((err) => {
        console.error("❌ Error saving User2:", err);
    });