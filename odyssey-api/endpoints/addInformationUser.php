<?php

require '../config/connect.php';

$nameUser = $_GET['nameUser'];
$newProfileTitle = $_POST['newProfileTitle'];

// Uploading the new profile image

$file = $_FILES['file'];
$fileName = $_FILES['file']['name'];
$fileTmpName = $_FILES['file']['tmp_name'];
$fileSize = $_FILES['file']['size'];
$fileError = $_FILES['file']['error'];
$fileType = $_FILES['file']['type'];

$imgContent = addslashes(file_get_contents($fileTmpName));
$fileExt = explode('.', $fileName);
$fileActualExt = strtolower(end($fileExt));
$allowed = array('jpg', 'jpeg', 'png');
$stmt = mysqli_stmt_init($conn);

if (in_array($fileActualExt, $allowed)) {
    if ($fileError === 0) {
        if ($fileSize < 5000000) {
            $fileNameNew = uniqid('', true).".".$fileActualExt;
            $fileDestination = '../images/users/'.$fileNameNew;
            move_uploaded_file($fileTmpName, $fileDestination);
            $sql = "UPDATE users SET profileImg = '$fileNameNew' WHERE nameUser = '$nameUser'";

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                /* Return to index page with error message in url */
                echo json_encode('Insert connection failed.');
                /* Exit php */
                exit();
                
            } else {
                mysqli_stmt_execute($stmt);
            }
            
            echo "Your file is now uploaded!";
        } else {
            echo "Your file is too big!";
        }
    } else {
        echo "There was an error uploading your file!";
    }
} else {
    echo "You cannot upload files of this type!";
}

// Uploading the new cover image

$file = $_FILES['coverImage'];
$fileName = $_FILES['coverImage']['name'];
$fileTmpName = $_FILES['coverImage']['tmp_name'];
$fileSize = $_FILES['coverImage']['size'];
$fileError = $_FILES['coverImage']['error'];
$fileType = $_FILES['coverImage']['type'];

$imgContent = addslashes(file_get_contents($fileTmpName));
$fileExt = explode('.', $fileName);
$fileActualExt = strtolower(end($fileExt));
$allowed = array('jpg', 'jpeg', 'png');
$stmt = mysqli_stmt_init($conn);

if (in_array($fileActualExt, $allowed)) {
    if ($fileError === 0) {
        if ($fileSize < 5000000) {
            $fileNameNew = uniqid('', true).".".$fileActualExt;
            $fileDestination = '../images/users/'.$fileNameNew;
            move_uploaded_file($fileTmpName, $fileDestination);
            $sql = "UPDATE users SET coverImg = '$fileNameNew' WHERE nameUser = '$nameUser'";

            if (!mysqli_stmt_prepare($stmt, $sql)) {
                /* Return to index page with error message in url */
                echo json_encode('Insert connection failed.');
                /* Exit php */
                exit();
                
            } else {
                mysqli_stmt_execute($stmt);
            }
            
            echo "Your file is now uploaded!";
        } else {
            echo "Your file is too big!";
        }
    } else {
        echo "There was an error uploading your file!";
    }
} else {
    echo "You cannot upload files of this type!";
}


// Uploading the new profile title

if ($newProfileTitle !== '') {
    $sql = "UPDATE users SET titleProfile = '$newProfileTitle' WHERE nameUser = '$nameUser'";

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        /* Return to index page with error message in url */
        echo json_encode('Insert connection failed, on the title.');
        /* Exit php */
        exit(); 
    } else {
        mysqli_stmt_execute($stmt);
    }
}

// Changing profile type

$newProfileType = $_POST['privateProfile'];

if ($newProfileType !== null) {

    if ($newProfileType == 'true') {
        $newProfileType = 1;
    }
    if ($newProfileType == 'false') {
        $newProfileType = 0;
    }

    $sql = "UPDATE users SET privateProfile = '$newProfileType' WHERE nameUser = '$nameUser'";

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        /* Return to index page with error message in url */
        echo json_encode('Insert connection failed, on the profiletype.');
        /* Exit php */
        exit(); 
    } else {
        mysqli_stmt_execute($stmt);
    }
}

// Free result set
mysqli_free_result($result);

mysqli_close($con);

