
<?php

require '../config/connect.php';

if (isset($_POST['submit'])) {
    $file = $_FILES['file'];
    $titlePost = $_POST['titlePost'];

    $locationData = $_POST['locationData'];
    $postTimeData = $_POST['postTimeData'];
    $postText = $_POST['postText'];
    $userId = $_GET['nameUser'];
    $descPost = $_POST['descPost'];
    $tags = $_POST['tags'];

    function RemoveBS($Str) {  
        $StrArr = str_split($Str); $NewStr = '';
        foreach ($StrArr as $Char) {    
          $CharNo = ord($Char);
          if ($CharNo == 163) { $NewStr .= $Char; continue; } // keep £ 
          if ($CharNo > 31 && $CharNo < 127) {
            $NewStr .= $Char;    
          }
        }  
        return $NewStr;
    }

    $descPost = preg_replace('/[^a-z\d ]/i', '', $descPost);
    $titlePostForSlug = RemoveBS($titlePost);
    $titlePostForSlug = preg_replace('/[^a-z\d ]/i', '', $titlePostForSlug);

    function seoUrl($string) {
        //Lower case everything
        $string = strtolower($string);
        //Make alphanumeric (removes all other characters)
        $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
        //Clean up multiple dashes or whitespaces
        $string = preg_replace("/[\s-]+/", " ", $string);
        //Convert whitespaces and underscore to dash
        $string = preg_replace("/[\s_]/", "-", $string);
        return $string."-".rand(100, 9999);
    }

    $slugPost = seoUrl($titlePostForSlug);
    
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
                $fileDestination = '../images/posts/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                $sql = "INSERT INTO posts (locationData, postTimeData, postCoverImg, postText, postPrivate, nameUser, titlePost, descPost, slugPost, tags)
                VALUES ('$locationData', '$postTimeData', '$fileNameNew', '$postText', 15, '$userId', '$titlePost', '$descPost', '$slugPost', '$tags')";

                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    /* Return to index page with error message in url */
                    echo $titlePost;
                    echo $titlePostForSlug;
                    echo $slugPost;

                    echo 'Insert connection failed.';
                    /* Exit php */
                    exit();
                    
                } else {
                    mysqli_stmt_execute($stmt);
                    header("Location: http://localhost:3000/user/$userId");
                    echo "Your file is now uploaded!";
                    echo $slugPost;
                }
            } else {
                echo "Your file is too big!";
            }
        } else {
            echo "There was an error uploading your file!";
        }
    } else {
        echo "You cannot upload files of this type!";
    }

    // Free result set
    mysqli_free_result($result);

    mysqli_close($con);
}