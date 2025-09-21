
const Chat = require("./models/chat.js");
const mongoose = require('mongoose');
main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // like chat app
  }

let allChats =[
{
    from : "neha",
    to : "priya",
    msg : "send me your exam sheets",
    created_at : new Date()
},
{
    from : "rohit",
    to : "mohit",
    msg : "send me your exam sheets",
    created_at : new Date()
},
{
    from : "amit",
    to : "sumit",
    msg : "send me your exam sheets",
    created_at : new Date()
},
{
    from : "bablu",
    to : "tablu",
    msg : "send me your exam sheets",
    created_at : new Date()
},
];

Chat.insertMany(allChats)

// allChats.save().then((res)=>{
//     console.log(res);
// });
