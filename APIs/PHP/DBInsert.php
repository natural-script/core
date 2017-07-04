<?php

$servername = 'localhost';
$username   = 'root';
$password   = 'root';
$dbname     = 'damn';
$tablename  = 'damn';
$dataRaw    = '{"ar":"0", "hahah":"0"}';
$dataRaw    = json_decode($dataRaw);

foreach ($dataRaw as $key => $val) {
    $calledColumns .= $key . ", ";
}

$calledColumns      = rtrim($calledColumns, ", ");
$calledColumnsArray = explode(", ", $calledColumns);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Create connection

$conn = mysqli_connect($servername, $username, $password);

// Check connection

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create The Database If It Doesn't Exist

$sql = "CREATE DATABASE IF NOT EXISTS $dbname;";
mysqli_query($conn, $sql);

// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Create The Table If It Doesn't Exist

$sql    = "SELECT ID FROM $tablename";
$result = mysqli_query($conn, $sql);

if (empty($result)) {
    for ($i = 0; $i < count($calledColumnsArray); $i++) {
        
        $neededColumns .= ", " . $calledColumnsArray[$i] . " varchar(255) NOT NULL";
    }
    $sql    = "CREATE TABLE $tablename ( ID int(11) AUTO_INCREMENT,PRIMARY KEY (ID)$neededColumns )";
    $result = mysqli_query($conn, $sql);
}

// Reading The Data

$sql = "SHOW columns FROM $tablename;";

if (mysqli_query($conn, $sql)) {
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_array($result)) {
        $columnsRaw .= $row['Field'] . ", ";
    }
    $columnsRaw   = rtrim($columnsRaw, ", ");
    $columnsArray = explode(", ", $columnsRaw);
    for ($i = 1; $i < count($columnsArray); $i++) {
        if ($dataRaw->{"$columnsArray[$i]"}) {
            $data .= "'" . $dataRaw->{"$columnsArray[$i]"} . "', ";
            $columns .= $columnsArray[$i] . ", ";
        } else {
            $data .= "'', ";
        }
    }
    $data    = rtrim($data, ", ");
    $columns = rtrim($columns, ", ");
    
    
}
echo $data;
// Inserting The Data

$sql = "INSERT INTO $tablename ($columns) VALUES ($data)";
mysqli_query($conn, $sql);

mysqli_close($conn);

?>
