⸻

# 🟢 Mongoose Schema Type Options (Full Cheat Sheet)
``` js
🔹 String

name: {
  type: String,
  required: true,         // must be provided
  unique: true,           // no duplicates
  minlength: 3,           
  maxlength: 20,          
  trim: true,             
  lowercase: true,        
  uppercase: true,        
  match: /^[a-zA-Z]+$/,   
  immutable: true,        // cannot change after creation
  default: "Guest",       // default value
  select: true,           // include in query results (false = hidden)
  index: true,            // add index for faster searches
  set: v => v.trim(),     // transform before saving
  get: v => v.toUpperCase() // transform when retrieving
}


⸻

🔹 Number

age: {
  type: Number,
  required: true,
  min: 18,                
  max: 60,                
  default: 25,            
  immutable: false,       
  set: v => Math.round(v), // always round values
  get: v => `${v} years`,  // convert when reading
  validate: {
    validator: v => v % 2 === 0,
    message: props => `${props.value} is not even`
  }
}


⸻

🔹 Boolean

isActive: {
  type: Boolean,
  default: true,
  select: false           // hidden in queries unless explicitly included
}


⸻

🔹 Date

createdAt: {
  type: Date,
  default: Date.now,      
  immutable: true,        // always fixed after creation
  get: v => v.toDateString()
}


⸻

🔹 Array

tags: {
  type: [String],         
  default: [],
  validate: {
    validator: v => v.length > 0,
    message: "At least one tag required"
  }
}


⸻

🔹 Object / Mixed

profile: {
  type: mongoose.Schema.Types.Mixed, 
  default: {}
}


⸻

🔹 Enum

role: {
  type: String,
  enum: ["user", "admin", "moderator"],
  default: "user"
}


⸻

🔹 Reference

posts: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Post",
  index: true
}]


⸻

🔹 Nested Schema

address: {
  street: { type: String, required: true },
  city:   { type: String, required: true },
  zip:    { type: Number }
}


⸻

⚡ Special Options (can be applied to all types)
	•	required: true → field must be provided
	•	default: <value> → sets default value if not provided
	•	unique: true → ensures no duplicates in collection
	•	index: true → creates an index for faster queries
	•	select: false → exclude field from query results unless explicitly selected
	•	immutable: true → cannot be changed once set
	•	set: fn(value) → transform value before saving
	•	get: fn(value) → transform value when retrieving
	•	validate → custom validation logic

⸻

✅ Example combining all:

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    immutable: true,
    set: v => v.replace(/\s+/g, "_"), // replace spaces with underscore
    get: v => v.toUpperCase()
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    select: true
  },
  age: {
    type: Number,
    min: 13,
    default: 18,
    set: v => Math.floor(v),
    get: v => `${v} yrs`
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  }
});
