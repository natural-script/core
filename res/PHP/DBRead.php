<?php
$servername   = $_POST['servername'];
$username     = $_POST['username'];
$password     = $_POST['password'];
$dbname       = $_POST['dbname'];
$tablename    = $_POST['tablename'];
$calledSlot   = $_POST['calledSlot'];
$resourceSlot = $_POST['resourceSlot'];
$resourceData = $_POST['resourceData'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql    = "SELECT * FROM $tablename WHERE $resourceSlot LIKE '$resourceData'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo $row["$calledSlot"];
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
