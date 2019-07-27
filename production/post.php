<?php

require("db.inc.php");
session_start();

/* Add all post calls here with a key.. */

if(isset($_POST['key'])){
    $key = $_POST['key'];
}else{
    return "Missing Key";
}

switch($key){
    case("worst");
        $result = getWorstQuestionIds();
        break;

    case("question"):
        $result = questionStatsUpdate();
        break;

    case("stats"):
        $result = getStats();
        break;
}

echo $result;

function questionStatsUpdate(){
    global $db;
    $response = [];

    $sql_statement = "";
    $sql_statement_correct = "";

    $user = $_SESSION['user_id'];
    $question = $_POST["question"];
    $answer = $_POST["answer"];
    $answer_correct = $_POST["correct"];

    //insert into $table (field, value) values (:name, :value) on duplicate key update value=:value2
    $sql_statement .= "INSERT INTO stats (user, question, answer0, answer1, answer2, answer3, correct, incorrect ) VALUES (:user, :question, :answer0, :answer1, :answer2, :answer3, :correct, :incorrect) on duplicate key update ";

    $sql_statement .= "answer" . $answer . " = answer". $answer ." + 1,";

    $answer0 = 0;
    $answer1 = 0;
    $answer2 = 0;
    $answer3 = 0;

    $correct = 0;
    $incorrect = 0;

    ${'answer' . $answer} = 1;

    //var_dump($_POST["correct"]);

    if($answer_correct === "true"){
        $correct = 1;
        $sql_statement_correct .= "correct = correct + 1";
    }else{
        $incorrect = 1;
        $sql_statement_correct .= "incorrect = incorrect + 1";
    }

    $sql_statement .= $sql_statement_correct;

    //var_dump($sql_statement);


    //$stmt = $db->prepare("INSERT INTO stats (user, question, answer1, answer2, answer3, answer4, correct, incorrect ) VALUES (:user, :question, :answer1, :answer2, :answer3, :answer4) on duplicate key update answer1 = answer1 + 1, answer2 = answer2 + 1, answer3 = answer3 + 1, answer4 = answer4 + 1, correct = correct + 1, incorrect = incorrect + 1");
    $stmt = $db->prepare($sql_statement);
    $stmt->execute(["user" => $user, "question" => $question, "answer0" => $answer0, "answer1" => $answer1, "answer2" => $answer2, "answer3" => $answer3, "correct" => $correct, "incorrect" => $incorrect]);



    return $response;
}


function getWorstQuestionIds(){

}

function getStats(){
    global $db;
    $sql_statement = "SELECT * FROM stats WHERE user = :user";

    $user = $_SESSION['user_id'];

    $stmt = $db->prepare($sql_statement);
    $stmt->execute(["user" => $user]);
    $response = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //var_dump($response);

    return json_encode($response);
}