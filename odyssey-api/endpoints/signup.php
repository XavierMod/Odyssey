<?php

require '../config/connect.php';

if (isset($_POST['content'])) {
    
    $username = json_decode($_POST['content'])->username;
    $email    = json_decode($_POST['content'])->email;
    $password = json_decode($_POST['content'])->password;
    
    // $response = array("success" => true, "message" => $hash);
    // echo json_encode($response); 
    
    $sql  = "SELECT emailUser FROM users WHERE emailUser=?";
    $stmt = mysqli_stmt_init($conn);
    
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo json_encode('error email');
        exit();
    } else {
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        $resultCheck1 = mysqli_stmt_num_rows($stmt);
        
        $sql  = "SELECT nameUser FROM users WHERE nameUser=?";
        $stmt = mysqli_stmt_init($conn);
        
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo json_encode('error name');
            exit();
        } else {
            mysqli_stmt_bind_param($stmt, "s", $username);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $resultCheck2 = mysqli_stmt_num_rows($stmt);
        }
        if ($resultCheck1 > 0 and $resultCheck2 > 0) {
            $response = array(
                "id" => 'email-username-taken',
                "messageEmail" => "This email is already registered",
                "messageUsername" => "This username is already registered"
            );
            echo json_encode($response);
            $result1 = 'email-taken';
            exit();
        } else if ($resultCheck1 > 0) {
            $response = array(
                "id" => 'email-taken',
                "message" => "This email is already registered"
            );
            echo json_encode($response);
            exit();
        } else if ($resultCheck2 > 0) {
            $response = array(
                "id" => 'username-taken',
                "message" => "This email is already registered"
            );
            echo json_encode($response);
            exit();
        } else {
            /* Insert form contents into database without allowing injection attacks */
            $sql  = "INSERT INTO users (emailUser, pwdUser, nameUser, privateProfile) VALUES (?, ?, ?, false)";
            $stmt = mysqli_stmt_init($conn);
            /* Check if connection with database works */
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                /* Return to index page with error message in url */
                echo json_encode('Insert connection failed, bitch.');
                /* Exit php */
                exit();
                
            } else {
                /* Hash password */
                $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
                
                /* Insert data entered into sql code */
                mysqli_stmt_bind_param($stmt, "sss", $email, $hashedPwd, $username);
                mysqli_stmt_execute($stmt);
                /* Return to index page with success message in url */
                echo json_encode('youre now on the database.');
                /* Exit php */
                exit();
            }
        }
    }
}