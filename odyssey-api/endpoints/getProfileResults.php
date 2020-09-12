
<?php

require '../config/connect.php';

if (isset($_POST['content'])) {

    $userId    = $_POST['content'];
    
    $sql  = "SELECT nameUser, profileImg FROM users WHERE nameUser LIKE '%{$userId}%'";

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