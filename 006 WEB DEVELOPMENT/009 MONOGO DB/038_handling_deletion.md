# Handling Deletion Using Mongoose Middleware (Query Middleware ) :

We can use 2 middlewares : 
- Pre : run before the query is executed
- Post : run after the query is executed

# Query Middleware : 
Mongoose findByIdAndDelete() automatically call findOneAndDelete so can define middleware for findOneAndDelete
```js
Schema.pre("findOneAndDelete", async(data) => {
    console.log("PRE MIDDLEWARE");
});
```

```js
Schema.post("findOneAndDelete", async(data) => {
    console.log("PRE MIDDLEWARE");
});
```

```js
const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(()=>console.log("connectionSuccessful");)
    .catch((err)=>console.log(err);)

    async function main() {
        await mongoose.connect("mongodb://127.0.0:1:27017/relationDemo");
    }

    const orderSchema = new Schema({
        item: String,
        price: Number,
    });

    const customerSchema = new Schema({
        name : String,
        orders : [
            {
                type : Schema.Types.ObjectId
                ref: "Order",
            },
        ],
    });

    // customerSchema.pre("findOneAndDelete", async() => {
    //     console.log("PRE MIDDLEWARE");
    // });

    customerSchema.post("findOneAndDelete", async(customer) => {
        console.log("PRE MIDDLEWARE");
        if(cutomer.orders.length) {
            let res = await Order.deleteMany({_id : {$in: cutomer.orders}});
            console.log(res);
        }
    });

    const order = mongoose.model("Order", orderSchema);
    const Customer = mongoose.model("Cutomer", cutomerSchema);

    //Functions
    const findCustomer = async() =>{
        let result = await Customer.find({}).populate("orders");
        console.log(result[0]);
    }

    const addCust = async ()=> {
        let newCust = new Customer ({
            name: "Karan Arjun"
        });
        
        let newOrder = new Order({
            item : "Pizza",
            price : 250,
        })

        newCust.orders.push(newOrder);

        await newOrder.save();
        await newCust.save();

        console.log("Added new customer");

    };

    addCust();


    const delCust = async()=> {
        let data = await Customer.findByIdAndDelete();
        console.log(data);
    }
    delCust();

```