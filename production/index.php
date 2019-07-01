<?php

session_start();

// check if user is logged in?
$loggedIn = isset($_SESSION['username']);
$username = $_SESSION['username'];

//if user is not logged in, boot em out and show them the login page
if(!$loggedIn){
    header("Location: /login");
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
    </header>
    <main>
        <div class="menu">
            <h2>Welcome, <?php echo $username ?></h2>

            <button>Mode 1 - Learning</button>
            <button>Mode 2 - Wrong Answer Improvement</button>
            <button>Mode 3 - Practice</button>
        </div>
    </main>
    <footer>
        <ul>
            <li><a href="/Logout">Logout</a></li>
        </ul>
        <p>&copy; 2019 - Byvelds Multimedia</p>
    </footer>
    <script src="master.min.js"></script>
</body>
</html>