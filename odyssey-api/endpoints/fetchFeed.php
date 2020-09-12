
<?php

require '../config/connect.php';

if (isset($_POST['content'])) {
    
    $userId    = $_POST['content'];

    $sql = "SELECT friends FROM users WHERE nameUser = '$userId'";
    $result = mysqli_query($conn, $sql);
    $rs = mysqli_fetch_array($result);
    $friendsString = $rs[0];
    $rsArr = explode(", ",$friendsString);
    $result = array();

    for ($x = 0; $x <= count($rsArr); $x++) {
        $sql  = "SELECT locationData, postTimeData, postText, postCoverImg, postPrivate, nameUser, titlePost, descPost, slugPost, idPost, likes, tags FROM posts WHERE nameUser='$rsArr[$x]' LIMIT 2";

        $queryResult = mysqli_query($conn, $sql);
    
        if ($queryResult) {
            while($row = mysqli_fetch_array($queryResult)) {
                array_push($result, $row);
            }
        }
    }

    echo json_encode($result);

    // Free result set
    mysqli_free_result($result);

    mysqli_close($con);
}