<?php
namespace App\Services;

use App\Models\Candidate;

class CandidateManager {

    private $conn;

    public function __construct($dbConnection) {
        $this->conn = $dbConnection;
    }

    public function add(Candidate $candidate) {

        $name   = $candidate->name;
        $email  = $candidate->email;
        $age    = (int)$candidate->age;
        $gender = $candidate->gender;

        $query = "INSERT INTO users (name, email, age, gender)
                  VALUES ('$name', '$email', '$age', '$gender')";

        return $this->conn->query($query);
    }

    public function delete($id) {
        $id = (int)$id;
        return $this->conn->query("DELETE FROM users WHERE id = $id");
    }

    public function getAll() {
        return $this->conn->query("SELECT * FROM users");
    }

    public function getById($id) {
        $id = (int)$id;
        return $this->conn->query("SELECT * FROM users WHERE id = $id");
    }
    
    public function update($id, $name, $email, $age, $gender) {
        $id = (int)$id;
        $age = (int)$age;
    
        return $this->conn->query(
            "UPDATE users 
             SET name='$name', email='$email', age='$age', gender='$gender' 
             WHERE id=$id"
        );
    }
}