
<?php

require '../config/connect.php';

if (isset($_POST['content'])) {

    $nearbyCity    = $_POST['content'];
    
    $sql  = "SELECT locationData, postTimeData, postText, postCoverImg, postPrivate, nameUser, titlePost, descPost, slugPost, likes, hasActiveUserLiked, idPost, tags FROM posts WHERE locationData='$nearbyCity'";

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

}