<?php

require '../config/connect.php';

$activeUser = $_POST['activeUser'];
$nonActiveUser = $_POST['nonActiveUser'];

$activeUserFriends = $_POST['activeUserFriends'];
$nonActiveUserFriends = $_POST['nonActiveUserFriends'];

$sql = "UPDATE users SET friends = '$activeUserFriends' WHERE nameUser = '$activeUser'";

$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    /* Return to index page with error message in url */
    echo json_encode('Insert connection failed, on the profiletype.');
    /* Exit php */
    exit(); 
} else {
    mysqli_stmt_execute($stmt);
}

$sql = "UPDATE users SET friends = '$nonActiveUserFriends' WHERE nameUser = '$nonActiveUser'";

if (!mysqli_stmt_prepare($stmt, $sql)) {
    /* Return to index page with error message in url */
    echo json_encode('Insert connection failed, on the profiletype.');
    /* Exit php */
    exit(); 
} else {
    mysqli_stmt_execute($stmt);
}

// Free result set
mysqli_free_result($result);

mysqli_close($con);

