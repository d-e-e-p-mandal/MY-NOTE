## Model :
    Model in mongose is a class with which we construct document.

```js
Const User = mongoose.model("User", userSchema);

user1.save(); // to save the data
```
It automatic convert in plural : User -> users
##### we can see it :
```bash
db.users.find()
```