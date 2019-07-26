(function($){
    var questions = QUESTIONS;
    var available_questions;
    var question_max = 5;
    var current_question_counter;
    var second_chance;
    var questions_correct;
    var current_mode;

    function reset(){
        questions_correct = 0;
        available_questions = questions.slice(0);
        current_question_counter = 0;
    }

    function showFinalResults(){
        // update results panel with game results..
        $("#result_correct").text(Number.parseFloat(questions_correct / 10).toFixed(1));
        $("#result_total").text(question_max);
        $("#result_percent").text((((questions_correct / 10) / question_max) * 100) + "%");

        // add events to results buttons..
        $("#result_play_again").off().on("click", function(){
            $("#results").hide();
            loadQuiz(current_mode);
        });

        $("#result_menu").off().on("click", function(){
            $("#results").hide();
            $("#menu").show();
        });

        // Swap game and result panels..
        $("#quiz").hide();
        $("#results").show();
    }
    
    function getRandomQuestion() {
        var random_num = Math.floor(Math.random() * available_questions.length);
        var question = available_questions.slice(random_num,random_num + 1);
        available_questions.splice(random_num,1);
        return question[0];
    }

    function setupMainMenu(){
        $(".game_start_btn").off().on("click", function(){
            $("#menu").hide();
            loadQuiz($(this).attr("data-mode"));
        });

        $(".stats_btn").off().on("click", function(){showStats();});
    }

    function loadQuestion(){
        // reset variables..
        second_chance = false;

        // Check if we reached the max amount of questions..
        if(current_question_counter === question_max){
            showFinalResults();
        }

        // hide feedback from previous question..
        $("#feedback, #next_btn").hide();

        // get random question
        current_question = getRandomQuestion();

        // add question text to quiz UI
        $("#question_text").html(current_question.Question);

        $(".answer").hide();

        // add answer text to each button
        for (var i = 0; i < current_question.Answers.length; i++){
            $("#answer" + (i + 1)).attr("data-answer-id", i).html(current_question.Answers[i]).show();
        }

        // shuffle the buttons
        $(".answer").removeClass("correct").removeClass("wrong").removeAttr("disabled","disabled").css("opacity", 1).shuffle().off().on('click', function(){checkAnswer($(this));});

        // update question counter..
        current_question_counter++;
        $("#question_number").html(current_question_counter);
    }

    function checkAnswer(btn){
        var answer_id = parseInt($(btn).attr("data-answer-id"));
        var correct = current_question.Correct;

        // turn off buttons..
        $(".answer").off();

        $.post("/post", {"key":"question", "question":current_question.ID, "answer":answer_id, "correct":(answer_id === correct)}, function(){
            // check if answer is correct..
            if (answer_id === correct) {
                // update game stats
                if (second_chance) {
                    questions_correct += 5;
                } else {
                    questions_correct += 10;
                }
                // update game ui to show "correct" state
                $("#feedback_text").html("Correct, Nice work");
                $("#feedback").addClass("correct");

                $(btn).addClass("correct");

                $("#next_btn").show().off().on("click", loadQuestion);

            } else {

                // update game ui to show "incorrect" state
                $("#feedback").addClass("incorrect");

                $(btn).addClass("wrong");

                // check if user can answer again.. only on mode one
                if (!second_chance) {
                    second_chance = true;
                    $("#feedback_text").html("Incorrect, Please try again");
                    $(btn).attr("disabled", "disabled");
                    $(".answer").off().on('click', function () {
                        checkAnswer($(this));
                    });
                    $(btn).off();
                } else {
                    $("#feedback_text").html("Incorrect");
                    $("#next_btn").show().off().on("click", loadQuestion);
                }
            }

            // show feedback div..
            $("#feedback").show();
        });
    }

    function loadModeOne() {
        reset();
        $("#menu").hide();
        $("#quiz").show();
        $("#question_total").text(question_max);

        loadQuestion();
    }

    function loadModeTwo(){
        // get question id's with the worst results..
        //$.post("/post.php", {"key":"worst"}, function(j){});
    }

    function loadModeThree(){
    }

    function loadQuiz(mode){
        current_mode = parseInt(mode);
        switch(current_mode){
            case(1):
                loadModeOne();
                break;

            case(2):
                loadModeTwo();
                break;

            case(3):
                loadModeThree();
                break;
        }
    }

    function showStats(){
        $("#menu").hide();
        $("#stats").show();
    }

    function init(){
        setupMainMenu();
    }

    $(document).ready(init);

    // JQUERY PLUGINS..
    $.fn.shuffle = function() {

        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };
}(jQuery));


