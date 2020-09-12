
<?php

require '../config/connect.php';
    
$sql  = "SELECT nameUser, emailUser, fullNameUser, bio, profileImg, coverImg, privateProfile, friends, titleProfile, likedPosts, privateProfile FROM users";

$queryResult = mysqli_query($conn, $sql);

if ($queryResult) {
    $result = array();
    while($row = mysqli_fetch_array($queryResult)) {
        $result[] = $row;
    }
    }

echo json_encode($result);

// Free result set
mysqli_free_result($result);

mysqli_close($con);
