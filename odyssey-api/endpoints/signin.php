<?php

require '../config/connect.php';

if (isset($_POST['content'])) {
    
    $email    = json_decode($_POST['content'])->email;
    $password = json_decode($_POST['content'])->password;

    $sql  = "SELECT pwdUser, nameUser FROM users WHERE emailUser='$email'";
    $result = mysqli_query($conn, $sql);
    $data = mysqli_fetch_array($result);

    if (password_verify($password, $data['pwdUser'])) {
        $response = array(
            "id" => 'login-success',
            "message" => $data['nameUser']
        );
        echo json_encode($response);
    }
    else {
        $response = array(
            "id" => 'wrong-password',
            "message" => "Incorrect username or password."
        );
        echo json_encode($response);
    }

    // Free result set
    mysqli_free_result($result);

    mysqli_close($con);
}