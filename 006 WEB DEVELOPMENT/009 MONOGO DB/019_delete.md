## Delete One by Filter
```bash
User.deleteOne({ name: "Adam" })
  .then(() => console.log("✅ One user deleted"))
  .catch(err => console.log(err));
```



## Delete Many by Filter
```bash
User.deleteMany({ age: { $lt: 25 } })
  .then(() => console.log("✅ Multiple users deleted"))
  .catch(err => console.log(err));
```


##  Delete by ID
```bash
User.findByIdAndDelete("68cb63003ee81e1bc3b076dc")
  .then(() => console.log("✅ User deleted by ID"))
  .catch(err => console.log(err));
```


## Find One and Delete
```bash
User.findOneAndDelete({ email: "adam@gmail.com" })
  .then(() => console.log("✅ User deleted by condition"))
  .catch(err => console.log(err));
```