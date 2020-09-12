<?php

// Initialize variable for database credentials
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';
$dbname = 'Odyssey';

   //Create database connection
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

   //Check connection was successful
   if (!$conn) {
      die("Connection failed.");
   }
?>