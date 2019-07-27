<?php

session_start();

// check if user is logged in?
$loggedIn = isset($_SESSION['username']);
$username = $_SESSION['username'];

//if user is not logged in, boot em out and show them the login page
if(!$loggedIn){
    header("Location: /login.php");
}

// check what theme is saved..
if(!isset($_COOKIE['theme'])){
    setcookie("theme", "light", 0, "/");
    $theme = "light";
}else{
    if(isset($_GET["theme"])){
        setcookie("theme", $_GET["theme"], 0, "/");
        $theme = $_GET["theme"];
    }else{
        $theme = $_COOKIE['theme'];
    }
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
<body class="theme_<?php echo $theme ?>">
    <div class="wrapper">
        <header>
            <h1>CIC Citizenship Quiz</h1>
        </header>
        <main>
            <div class="menu" id="menu">
                <h2>Welcome, <?php echo ucfirst($username) ?></h2>

                <button class="game_start_btn" data-mode="1">Mode 1 - Learning</button>
                <button class="game_start_btn" data-mode="2" disabled>Mode 2 - Wrong Answer Improvement</button>
                <button class="game_start_btn" data-mode="3" disabled>Mode 3 - Practice</button>
                <button class="stats_btn" disabled>Show Stats</button>
            </div>

            <div class="quiz_ui" id="quiz">
                <div class="counter">Question <span id="question_number"></span> of <span id="question_total"></span></div>
                <div class="question_text" id="question_text"></div>

                <button class="answer" id="answer1"></button>
                <button class="answer" id="answer2"></button>
                <button class="answer" id="answer3"></button>
                <button class="answer" id="answer4"></button>

                <div class="feedback" id="feedback">
                    <div class="icon" id="feedback_icon"></div>
                    <div class="text" id="feedback_text"></div>
                    <button class="next" id="next_btn">Next Question</button>
                </div>
            </div>

            <div class="results_ui" id="results">
                <div class="percent" id="result_percent"></div>

                <div class="correct_text">
                    You got <span id="result_correct"></span> out of <span id="result_total"></span>
                </div>

                <button id="result_play_again">Play Again</button>
                <button id="result_menu">Back to Menu</button>
            </div>

            <div class="stats_wrapper" id="stats">
                <div id="stats_questions_answered">Questions Answered:<span></span></div>
                <div id="stats_correct">Questions Correct: <span></span></div>
                <div id="top_category">Top Category: </div>
            </div>
        </main>

        <footer>
            <ul>
<!--                <li>--><?php //if($theme === "light"){echo "<a href=\"/?theme=dark\">Dark Mode</a>";}else{echo "<a href=\"/?theme=light\">Light Mode</a>";} ?><!--</li>-->
                <li><a href="/logout.php">Logout</a></li>
            </ul>
            <p>&copy; 2019 - Byvelds Multimedia - Ver 1.0</p>
        </footer>
    </div>
    <script src="jquery.min.js"></script>
    <script src="questions.min.js?version=1"></script>
    <script src="master.min.js"></script>
</body>
</html>