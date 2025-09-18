## 🔹 Find by ID and Update
```js
User.findByIdAndUpdate(
  "68cb63003ee81e1bc3b076dc",   // _id
  { $set: { age: 28 } }         // update
)
  .then(() => console.log("✅ Updated by ID"))
  .catch(err => console.log(err));

  ```

## Find One and Update
  ```js
  User.findOneAndUpdate(
  { name: "Adam" },             // filter
  { $set: { email: "newadam@gmail.com" } }  // update
)
  .then(() => console.log("✅ Updated by condition"))
  .catch(err => console.log(err));

  ```