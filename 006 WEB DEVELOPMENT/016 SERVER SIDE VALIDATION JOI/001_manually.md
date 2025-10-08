
```js
app.post("/listings", warpAsync(async (req, res) => {
        if(!req.body.listing) {
            throw new ExpressError(400, "Send valid data for listing");
        }
    
        const newListing = new Listing(req.body.listing);

        if(!newListing.title) {
            throw new ExpressError(400, "Title is missing!");
        }
        if(!newListing.description) {
            throw new ExpressError(400, "Description is missing");
        }
        if(!newListing.location) {
            throw new ExpressError(400, "Location is missing");
        }
        await newListing.save();
        res.redirect("/listings");   // ✅ redirect to listings page
 })
);
```