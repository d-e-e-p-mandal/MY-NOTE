
### Install mongoose :
npm i mongoose

```js
const mongoose = require("mongoose");

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
```

### Note :
Mongoose uses `Operation Buffering`

Mongoose let you start using your models immdiately, without waiting for mongoose to estabilish a connection to MongoDB.