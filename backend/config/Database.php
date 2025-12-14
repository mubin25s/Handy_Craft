<?php
/**
 * MySQL Database Connection Class
 * Handles connection to MySQL database using PDO
 */

require_once __DIR__ . '/config.php';

class Database {
    private $host = DB_HOST;
    private $db_name = DB_NAME;
    private $username = DB_USER;
    private $password = DB_PASS;
    private $conn;

    /**
     * Connect to the database
     */
    public function connect() {
        $this->conn = null;

        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name;
            $this->conn = new PDO($dsn, $this->username, $this->password);
            
            // Set error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Set default fetch mode to associative array
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            
            // Set character set to UTF-8
            $this->conn->exec("set names utf8");
            
        } catch(PDOException $e) {
            // Echo error but don't kill script immediately to allow handling
            echo json_encode([
                'success' => false, 
                'error' => 'Connection Error: ' . $e->getMessage()
            ]);
            exit;
        }

        return $this->conn;
    }

    /**
     * Execute a query
     */
    public function query($sql, $params = []) {
        try {
            if ($this->conn === null) {
                $this->connect();
            }
            
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch(PDOException $e) {
            echo json_encode(['error' => 'Query Failed: ' . $e->getMessage()]);
            exit;
        }
    }
}
?>
