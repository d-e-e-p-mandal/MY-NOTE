const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'College',
    password : 'Deep@2120',
    port : '3306',
});

//data inseart
// ✅ New student object
const student = {
    id: 7,
    name: 'Priya',
    age: 21,
    department: 'ECE'
};

// ✅ Create array and push values
let data = [];
data.push(student.id);
data.push(student.name);
data.push(student.age);
data.push(student.department);

//or
//data.push(student);

let q = 'INSERT INTO students (id, name, age, department) VALUES (?, ?, ?, ?)';

// ✅ Use the array in the query
connection.query(q, data, (err, results) => {
    if (err) {
        console.error("Insert Error:", err);
        return;
    }
    console.log("✅ Student inserted:", results);
});




q = 'SELECT * FROM students';
try {
    connection.query(q,(err, results, fields) =>{
        if(err)throw err;
        console.log("Results", results);
        console.log("Fields", fields);
    });
} catch (error) {
    console.log("Something Error.........");
    
}


connection.end();