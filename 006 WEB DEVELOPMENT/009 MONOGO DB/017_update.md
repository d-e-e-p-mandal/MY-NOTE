``` js
User.updateOne(
  { name: "Adam" },         // filter
  { $set: { age: 25 } }     // update
)
  .then(() => console.log("✅ Data updated"))
  .catch(err => console.log(err));
```
``` js
User.updateMany(
  { age: { $lt: 30 } },     // filter condition
  { $set: { age: 30 } }     // update
)
  .then(() => console.log("✅ Multiple users updated"))
  .catch(err => console.log(err));
  
``` 