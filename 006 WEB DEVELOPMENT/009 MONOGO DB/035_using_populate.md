## Populate :

Population is the process of automatically replacing the specified paths in the document with socument(s) from other collection(s). We may ppopulate a single socument, multiple socumensts, a plain object, multiple plain objects, or all objects returned from a query.

##### Example shortly : 
```js 
const findCustomer = async() =>{
        let result = await Customer.find({}).populate("orders");
        console.log(result);
        console.log(result[0]); // to print details of object
}
```

``` js 
const mongoose = require("mongoose");
    const { Schema } = mongoose;


    main()
        .then(()=>console.log("connection Successful");)
        .catch((err)=>console.log(err);)

        async function main() {
            await mongoose.connect("mongodb://127.0.0:1:27017/relationDemo");
        }

        const orderSchema = new Schema({
            item: String,
            price: Number,
        });

        const customerSchema = new Schema({
            name: String,
            orders:[
                {
                    type: Schema.Types.ObjectId,
                    ref: "Order"
                }
            ]
        });

        const Order = mongoose.model("Order", orderSchema);
        const Customer = mongoose.model("Customer", customerSchema);

    const findCustomer = async() =>{
        let result = await Customer.find({}).populate("orders");
        console.log(result);
    }

    findCustomer();
```


## Mongoose Nested Populate Example
```js
// models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
```

```js
// models/review.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Review", reviewSchema);
```
#### ⚙️ Nested Populate Usage
```js
const Listing = require("./models/listing");

app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",     // Nested populate
        model: "User"
      }
    })
    .populate("owner"); // Also populate the listing's owner

  res.render("listings/show", { listing });
});
```