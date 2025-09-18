## Schema :
    schema define the shape of the documents within the collection.

``` js

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});


const User = mongoose.model("User", userSchema);
```