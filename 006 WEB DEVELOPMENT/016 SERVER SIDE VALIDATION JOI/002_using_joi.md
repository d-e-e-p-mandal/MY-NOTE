## JOI Validation for Schema :
```bash
    npm install joi
```
``` js 
// create file schema.js with app.js to validate schema

const Joi = require('joi');

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

app.post("/listings", warpAsync(async (req, res) => {
        let result = listingSchema.validate(req.body);
        console.log(result);
        // if error exists
        if(result.error) {
            throw new ExpressError(404, result.error);
        }

        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");   // ✅ redirect to listings page
 })
);

```