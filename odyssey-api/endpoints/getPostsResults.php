
<?php

require '../config/connect.php';

if (isset($_POST['content'])) {

    $postQuery    = $_POST['content'];

    $sql  = "SELECT idPost, locationData, postTimeData, postCoverImg, postText, postPrivate, titlePost, descPost, slugPost, nameUser, likes, hasActiveUserLiked, idPost, tags FROM posts WHERE titlePost LIKE '%{$postQuery}%'";

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