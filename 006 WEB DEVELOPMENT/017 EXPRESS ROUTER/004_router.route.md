# router.route

```js
router.route("/")
.get( wrapAsync(listingController.index)) // index route
.post( isLoggedIn,upload.single('listing[image]'),validateListing,      // create route
 wrapAsync( listingController.createListing)
);
```