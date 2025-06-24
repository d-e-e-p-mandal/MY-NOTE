const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'College',
    password : 'Deep@2120',
    port : '3306',
});

//data inseart
const newStudent = {
    id: 7,
    name: 'An',
    age: 22,
    department: 'IT-DD',
};

let q = 'INSERT INTO students (id, name, age, department) VALUES (?, ?, ?, ?)';
try{
connection.query(q, [newStudent.id, newStudent.name, newStudent.age, newStudent.department], (err, results) => {
    if (err) {
        console.error("Insert Error:", err);
        return;
    }
    console.log("✅ New student inserted:", results);
});
}catch(err){
    console.log("Errrr..............");
    
}
//connection.end(); //once connection end reaming query will not work


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