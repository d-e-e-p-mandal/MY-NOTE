import React, { useReducer, useState } from "react";

// Reducer function for managing records
function recordReducer(state, action) {
  switch (action.type) {
    case "ADD_RECORD":
      return [...state, action.payload];

    case "DELETE_RECORD":
      return state.filter((_, index) => index !== action.payload);

    default:
      return state; // or return throw exception(e)
  }
}

let initial = [];
export default function Form() {
  // useReducer: manages the list of records
  const [records, dispatch] = useReducer(recordReducer, initial); //initial what type of data store initial same as useState

  // useState: manages form inputs
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: ""
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.name || !formData.email) {
      alert("All fields are required!");
      return;
    }

    dispatch({ type: "ADD_RECORD", payload: formData });

    setFormData({ id: "", name: "", email: "" });
  };

  // Handle record deletion
  const handleDelete = (index) => {
    dispatch({ type: "DELETE_RECORD", payload: index });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form with useReducer (Add + Delete)</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Records List */}
      <h3>Submitted Records</h3>
      {records.length === 0 ? (
        <p>No records yet</p>
      ) : (
        <ul>
          {records.map((rec, index) => (
            <li key={index}>
              <strong>ID:</strong> {rec.id}, <strong>Name:</strong> {rec.name},{" "}
              <strong>Email:</strong> {rec.email}{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}