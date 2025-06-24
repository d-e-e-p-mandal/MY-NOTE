const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'College',
    password: 'Deep@2120',
    port: '3306',
});

// connection. connect part is optional
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL!');
  
//     // Example query to use results and fields
//     connection.query('SELECT * FROM students', (err, results, fields) => {
//       if (err) throw err;
  
//       console.log('Results:', results);       // Array of row objects
//       console.log('Fields:', fields);         // Array of metadata about columns
//     });
//   });


//show table
try{
connection.query('SELECT * FROM students', (err, results, fields) => {
    if (err) throw err;

    console.log('Results:', results);
    console.log('Fields:', fields);

    // ✅ Close connection properly after query
    connection.end((err) => {
        if (err) console.error('Error closing connection:', err.message);
        else console.log('Connection closed.');
    });
});
}catch(err){
    console.log("error");
    
}

// connection.end(); //already use