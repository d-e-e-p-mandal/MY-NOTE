### Find All Users
``` js
User.find()
  .then((docs) => {
    console.log("✅ All users:");
    console.log(docs);
  })
  .catch((err) => {
    console.error("❌ Error finding users:", err);
  });

```
### Find All Users : Only name : use .name
``` js
User.find()
  .then((docs) => {
    console.log("✅ All users:");
    console.log(docs.name);
  })
  .catch((err) => {
    console.error("❌ Error finding users:", err);
  });

```

### Find All Users : Only name of 1st user : use .name
``` js
User.find()
  .then((docs) => {
    console.log(docs[0].name);
  })
  .catch((err) => {
    console.error("❌ Error finding users:", err);
  });

```

## Find with Filter
``` js
User.find({ age: { $gte: 25 } })   // users with age ≥ 25
  .then((docs) => {
    console.log("✅ Users age >= 25:");
    console.log(docs);
  })
  .catch((err) => {
    console.error("❌ Error finding users:", err);
  });
  ```

## Find One :
``` js
User.findOne({ email: "john@gmail.com" })
  .then((doc) => {
    console.log("✅ Found user:");
    console.log(doc);
  })
  .catch((err) => {
    console.error("❌ Error finding user:", err);
  });
```

  ## Find By ID
``` bash
User.findById("68cb63003ee81e1bc3b076dc")
  .then((doc) => {
    if (doc) {
      console.log("✅ User found:");
      console.log(doc);
    } else {
      console.log("⚠️ No user found with that ID");
    }
  })
  .catch((err) => {
    console.error("❌ Error finding user:", err);
  });


#⚡ So findById() is just a shorthand for:
  User.findOne({ _id: "68cb63003ee81e1bc3b076dc" })

```