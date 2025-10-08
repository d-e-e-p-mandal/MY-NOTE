## JOI Validation for Schema :

``` js 
// create file schema.js with app.js to validate schema

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required();
        description : Joi.string().required();
        location : Joi.string().required();
        courtry : Joi.string().required();
        price : Joi.string().required().min(0);
        image : Joi.string().allow("", null);
    }).required(),
});


```

```js


const {listingSchema } =  require("./schema.js");

const Joi = require('joi');

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    
    if(error) {
        let errMsg = error.details.map((el)=> el.message).join(",");
        
        //throw new ExpressError(400, result.error);
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}


app.post("/listings",validateListing, warpAsync(async (req, res) => {

        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");   // ✅ redirect to listings page
 })
);

```