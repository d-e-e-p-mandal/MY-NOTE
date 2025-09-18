```js
const user1 = new User({
    name : "Adam",
    email : "adam@gmail.com",
    age : 20,
})

```
#### command :
```bash
cd #required repository
node
.load index.js #load index.js in node
```

`id: new ObjectId('68cb63003ee81e1bc3b076dc') automaticall id initially by mongoose`


## Insert Many : 
``` js
const users = [
  {
    name: "John",
    email: "john@gmail.com",
    age: 25,
  },
  {
    name: "Jane",
    email: "jane@gmail.com",
    age: 28,
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    age: 30,
  },
];

User.insertMany(users)
  .then((docs) => {
    console.log("✅ Users inserted successfully!");
    console.log(docs);
  })
  .catch((err) => {
    console.error("❌ Error inserting users:", err);
  });