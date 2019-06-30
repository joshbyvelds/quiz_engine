<?php

    // Set Initial Variables..
    $submit = false;
    $error = false;
    $username = false;
    $password = false;

    // Check if form input are set..
    if(isset($_POST['submit_button']))
        $submit = true;

    if(isset($_POST['username'])){
        $username = $_POST['username'];
    }

    if(isset($_POST['password'])){
        $password = $_POST['password'];
    }

    //echo password_hash($password, PASSWORD_DEFAULT);

    // Check if user exists and if passwords match..
    if($submit && $username && $password){
        require_once("db.inc.php");

        try {
            $result = $db->prepare("SELECT id, username, password FROM users WHERE username = ?");
            $result->bindParam(1, $username);
            $result->execute();

            $user = $result->fetchAll(PDO::FETCH_ASSOC);
            if(count($user) === 1){

                if(password_verify($password, $user[0]['password'])){
                    session_start();
                    $_SESSION['username'] = $username;
                    $_SESSION['user_id'] = $user[0]['id'];
                    header("Location: /");
                }else{
                    $error = "Username and password do not match, please try again.";
                }
            }else{
                $error = "Username and password do not match, please try again.";
            }

        } catch (PDOException $e) {
            echo "DB FAIL <br />";
            $error = "Username and password do not match, please try again.";
        }
    }

    // Check if form inputs are empty
    if($submit && !$username){
        $error = "Please enter your username";
    }

    if($submit && !$password){
        $error = "Please enter your password";
    }
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quiz Engine</title>
    <link rel="stylesheet" href="master.css">
</head>
<body>
    <header>
        <h1>Quiz Engine</h1>
        <h3>Login</h3>
    </header>
    <div class="login">
        <form action="/login.php" method="post">
            <div class="field">
                <input type="text" name="username" id="username" placeholder="username" value="<?php echo $username ?>">
                <label for="username">Username</label>
            </div>

            <div class="field">
                <input type="password" name="password" id="password" placeholder="password">
                <label for="password">Password</label>
            </div>

            <div class="error <?php if($error) echo "show" ?>">
                <div class="error_message"><?php echo $error ?></div>
            </div>

            <button type="submit" name="submit_button">Login</button>
        </form>
    </div>

    <footer>
        <p>&copy; 2019 - Byvelds Multimedia</p>
    </footer>
</body>
</html>