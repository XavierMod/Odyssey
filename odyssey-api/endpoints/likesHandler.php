<?php

require '../config/connect.php';

$idPost = $_POST['idPost'];
$hasActiveUserLiked = $_POST['hasActiveUserLiked'];
$likesUpdated = $_POST['likesUpdated'];
$newActiveUserLikedPostsString = $_POST['newActiveUserLikedPostsString'];
$userActive = $_POST['userActive'];

$stmt = mysqli_stmt_init($conn);

$sql = "UPDATE posts SET likes = '$likesUpdated', hasActiveUserLiked = '$hasActiveUserLiked' WHERE idPost = '$idPost'";

if (!mysqli_stmt_prepare($stmt, $sql)) {
    /* Return to index page with error message in url */
    echo json_encode('Insert connection failed, on the profiletype.');
    /* Exit php */
    exit(); 
} else {
    echo json_encode('Data added');
    mysqli_stmt_execute($stmt);
}

$sql = "UPDATE users SET likedPosts = '$newActiveUserLikedPostsString' WHERE nameUser = '$userActive'";

if (!mysqli_stmt_prepare($stmt, $sql)) {
    /* Return to index page with error message in url */
    echo json_encode('Insert connection failed, on the profiletype.');
    /* Exit php */
    exit(); 
} else {
    echo json_encode('Data added');
    mysqli_stmt_execute($stmt);
}

// Free result set
mysqli_free_result($result);

mysqli_close($con);