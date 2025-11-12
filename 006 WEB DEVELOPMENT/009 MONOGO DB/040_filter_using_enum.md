# Filter Option using enum in mongodb :
An enum represents a set of predefined constant values — e.g.,
["active", "inactive", "pending"].

When you store documents in MongoDB that contain fields restricted to such values, you can filter documents based on that enum.


### Defining an Enum in a Mongoose Schema
```js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["active", "inactive", "pending"], // enum values
    default: "pending",
  },
});

const User = mongoose.model("User", UserSchema);

```

#### Filter by Single Enum Value

```js
const activeUsers = await User.find({ status: "active" });

```

#### Filter by Multiple Enum Values ($in operator)
```js
const selectedUsers = await User.find({ status: { $in: ["active", "pending"] } });
```

####
```js
const excludedUsers = await User.find({ status: { $nin: ["inactive"] } });
```














### Using TypeScript Enum (Optional — If You’re Using TypeScript)
```js
enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

interface IUser extends mongoose.Document {
  name: string;
  status: UserStatus;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(UserStatus),
    default: UserStatus.Pending,
  },
});
```


#### Then filter safely:
```js
const users = await User.find({ status: UserStatus.Active });
```