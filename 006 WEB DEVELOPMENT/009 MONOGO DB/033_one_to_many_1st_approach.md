## One to Few :

```js
const mongoose = require("mongoose");

main()
    .then(()=>console.log("Conncetion Successful");)
    .catch((err)=>console.log("err");)

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemon");
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id : false, // no id will be created for addresses
            location: String,
            city: String,
        },
    ],
});

const addUsers = async()=>{
    let user1 = new User({
        username: "sherlockholmes",
        addresses: [{
            location: "221B baker Street",
            city: "London"
        }]
    });

    user1.addresses.push({location:"P32 Wallstreet", city: "London"});

    await user1.save();
}

addUsers();
```