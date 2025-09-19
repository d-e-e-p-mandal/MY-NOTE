
# 🟢 Update with Validation in Mongoose

## 🔹 Why use runValidators?
	•	By default, Mongoose validators don’t run on updates.
	•	To enforce schema rules during updates, use:
``` js
{ runValidators: true }
```
	•	Add new: true → returns updated document instead of old one.

⸻

🔹 Custom Error Handling Syntax

When validation fails, Mongoose throws a ValidationError.
You can loop through all fields and show clean custom error messages:
``` js
min: [18, "⚠️ Age must be at least 18"],
max: [60, "⚠️ Age must not exceed 60"],
```

⸻

🔹 Example
``` js
const mongoose = require("mongoose");

// Schema with validation + custom error messages
const userSchema = new mongoose.Schema({
  age: {
    type: Number,
    min: [18, "⚠️ Age must be at least 18"],
    max: [60, "⚠️ Age must not exceed 60"],
  },
  name: {
    type: String,
    required: [true, "⚠️ Name is required!"],
  }
});

const User = mongoose.model("User", userSchema);

// Update with runValidators + custom error handling
User.findByIdAndUpdate(
  "68cb63003ee81e1bc3b076dc", // user ID
  { age: 10, name: "" },      // ❌ invalid update
  { runValidators: true, new: true }
)
  .then(user => console.log("✅ Updated:", user))
  .catch(err => {
    console.log("❌ Validation Error:", err.errors.price.properties.message);

});



//   .catch(err => {
//     if (err.name === "ValidationError") {
//       for (let field in err.errors) {
//         console.log("❌ Validation Error:", err.errors[field].message);
//       }
//     } else {
//       console.log("❌ Other Error:", err.message);
//     }
//   });
```

⸻

🔹 Output

❌ Validation Error: ⚠️ Age must be at least 18
❌ Validation Error: ⚠️ Name is required!


⸻
