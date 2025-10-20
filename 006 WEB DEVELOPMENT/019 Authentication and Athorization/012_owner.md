## Add owner in Schema :
```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default:
        "https://images.pexels.com/photos/843168/pexels-photo-843168.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

```

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Review", reviewSchema);
```

### map function for add new data in each object

```js
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=> ({
    ...obj,
    owner: "65f0081ae547c5d37e56b5f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
```


```js
router.get("/:id/edit", async (req, res)=>{
let {id} = req.params;
const listing = await Listing.findById(id).populate("reviews").populate("User");
res.render("listings/edit.ejs", {listing});
});
```

### req.user._id
`req.user._id is the owner of new listing :`

```js
router.post("/",validateListing, warpAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing created.");
    res.redirect("/listings");   // ✅ redirect to listings page
})
);
```