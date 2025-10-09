```js
    const mongoose = require("mongoose");
    const { Schema } = mongoose;


    main()
        .then(()=>console.log("connection Successful");)
        .catch((err)=>console.log(err);)

        async function main() {
            await mongoose.connect("mongodb://127.0.0:1:27017/relationDemo");
        }

        const userSchema = new Schema({
            username: String,
            email: String
        });

        const postSchema = new Schema({
            content: String,
            likes: Number,
            user:{
                type: Schema.Types.ObjectId,
                ref:"User"
            }
        });

        const User = mongoose.model("User", userSchema);
        const Post = mongoose.model("Post", postSchema);

        const addData = async ()=> {
            let user1 = new User({
                username: "rahulkumar",
                email: "rahul@gamil.com",
            });

            let post1 = new Post({
                content: "Hlw world",
                likes: 8,
            });
            post1.user = user1;

            await user1.save();
            await post1.save();
        };

        addData();
```
> Add another data
```js
const addData = async ()=> {
    let user = await User.findOne({username: "rahulkumar"});

    let post2 = new Post({
        content: "Bye Bye",
        likes: 50,
    });
    post2.user = user;

    await post2.save();
    };

    addData();

```