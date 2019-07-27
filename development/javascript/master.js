(function($){
    var questions = QUESTIONS;
    var available_questions;
    var question_max = 0;
    var question_max_worst = 10;
    var question_max_practice = 30;
    var current_question_counter;
    var second_chance;
    var questions_correct;
    var current_mode;

    var question_max_internal;
    var seconds = 30 * 60;

    var showFeedback = true;
    var wrong;
    var cancelTimer;

    function reset(){
        $("#timer").hide();
        $("#minutes").html("00");
        $("#seconds").html("00");
        seconds = 30 * 60;
        questions_correct = 0;
        available_questions = questions.slice(0);
        current_question_counter = 0;
        question_max_internal = (question_max === 0) ? available_questions.length : question_max;
        wrong = [];
    }

    function showFinalResults(){
        // update results panel with game results..
        $("#result_correct").text(Number.parseFloat(questions_correct / 10).toFixed(1));
        $("#result_total").text(question_max_internal);
        $("#result_percent").text(round(((questions_correct / 10) / question_max_internal) * 100, 2) + "%");

        wrong.forEach(function(element){
            $("#results_wrong ul").append("<li><strong>"+ questions[element].Question +"</strong>"+ questions[element].Answers[questions[element].Correct] +"</li>")
        });

        cancelTimer = true;
        if(!showFeedback) {
            $("#result_time").show();
            var r_minutes = Math.floor(((30 * 60) - seconds) / 60);
            var r_seconds = ((30 * 60) - seconds) % 60;
            $("#results_minutes").html((r_minutes < 10) ? "0" + r_minutes : r_minutes);
            $("#results_seconds").html((r_seconds < 10) ? "0" + r_seconds : r_seconds);
        }else{
            $("#result_time").hide();
        }

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
        if(current_question_counter === question_max_internal){
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
        $(".answer").removeClass("selected").removeClass("correct").removeClass("wrong").removeClass("show_correct").removeAttr("disabled","disabled").css("opacity", 1).shuffle().off().on('click', function(){checkAnswer($(this));});

        // update question counter..
        current_question_counter++;
        $("#question_number").html(current_question_counter);
    }

    function checkAnswer(btn){
        var answer_id = parseInt($(btn).attr("data-answer-id"));
        var correct = current_question.Correct;

        // turn off buttons..
        $(".answer").off();

        if(!showFeedback) {
            btn.addClass("selected");
        }

        $.post("/post.php", {"key":"question", "question":current_question.ID, "answer":answer_id, "correct":(answer_id === correct)}, function(){
            // check if answer is correct..
            if (answer_id === correct) {
                // update game stats
                if (second_chance) {
                    questions_correct += 5;
                } else {
                    questions_correct += 10;
                }
                // update game ui to show "correct" state
                if(showFeedback) {
                    $("#feedback_text").html("Correct, Nice work");
                    $("#feedback").addClass("correct");

                    $(btn).addClass("correct");
                }

                $("#next_btn").show().off().on("click", loadQuestion);

            } else {
                // check if user can answer again.. only on mode one
                if(showFeedback) {

                    // update game ui to show "incorrect" state
                    $("#feedback").addClass("incorrect");
                    $(btn).addClass("wrong");

                    if (!second_chance) {
                        second_chance = true;
                        $("#feedback_text").html("Incorrect, Please try again");
                        $(btn).attr("disabled", "disabled");
                        $(".answer").off().on('click', function () {
                            checkAnswer($(this));
                        });
                        $(btn).off();
                        wrong.push(current_question.ID);
                    } else {
                        $("#feedback_text").html("The correct answer has the dark green background.");
                        $(".answer[data-answer-id=" + correct + "]").addClass("show_correct");
                        $("#next_btn").show().off().on("click", loadQuestion);
                    }
                }else{
                    $("#next_btn").show().off().on("click", loadQuestion);
                    wrong.push(current_question.ID)
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
        $("#question_total").text(question_max_internal);

        showFeedback = true;

        loadQuestion();
    }

    function timerCountdown(){
        setTimeout(function(){
            if(seconds === 0){
                showFinalResults();
                return;
            }

            if(cancelTimer === true)
                true;

            seconds--;
            var minutes = Math.floor(seconds / 60);
            var seconds_split = seconds % 60;

            $("#minutes").html((minutes < 10) ? ("0" + minutes) : (minutes));
            $("#seconds").html((seconds_split < 10) ? ("0" + seconds_split) : (seconds_split));

            timerCountdown();

        }, 1000);
    }

    function loadModeTwo(){
        // get question id's with the worst results..
        reset();

        $.post("/post.php", {"key":"stats"}, function(j){
            var worst = [];
            if(j){

                // Get stats from DB..
                json = JSON.parse(j);
                json.forEach(function (element) {
                    worst.push({"question_id":element.question, "percent":round((parseInt(element.correct) / (parseInt(element.correct) + parseInt(element.incorrect)) * 100), 2)})
                });

                // Sort questions based of how often the user has gotten it wrong over if they got it correct..
                worst.sort(function(a, b) {return a.percent - b.percent;});
                worst = worst.splice(0,question_max_worst);

                // Set total amount of questions..
                question_max_internal = (questions.length >= question_max_worst) ? question_max_worst : questions.length;

                // Add worst questions to game question array..
                available_questions = [];
                worst.forEach(function(element){
                    available_questions.push(questions[element.question_id]);
                });

                // Hide Menu and show Game..
                $("#menu").hide();
                $("#quiz").show();
                $("#question_total").text(question_max_internal);

                showFeedback = true;

                // Start Game..
                loadQuestion();
            }
        });
    }

    function loadModeThree(){
        reset();

        // setup Timer
        $("#timer").show();
        $("#minutes").html("30");

        // Setup Game UI and Hide Menu..
        question_max_internal = (questions.length >= question_max_practice) ? question_max_practice : questions.length;
        $("#menu").hide();
        $("#quiz").show();
        $("#question_total").text(question_max_internal);

        showFeedback = false;

        // Start Game..
        cancelTimer = false;
        timerCountdown();
        loadQuestion();
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

        $("#stats_back").off().on('click', closeStats);
        $.post("/post.php", {key:"stats"}, function(j){
            var json;
            var correct = 0;
            var total = 0;
            var top_question = "N/A";
            var top_question_percent = 0;
            var worst_question = "N/A";
            var worst_question_percent = 101;
            var top_cat = "N/A";
            var worst_cat = "N/A";

            var question_percent;

            if(j){
                json = JSON.parse(j);
                json.forEach(function (element) {
                    correct += parseInt(element.correct);
                    total += parseInt(element.correct) + parseInt(element.incorrect);
                    question_percent = (parseInt(element.correct) / (parseInt(element.correct) + parseInt(element.incorrect) * 100));

                    if(question_percent >  top_question_percent){
                        top_question_percent = question_percent;
                        top_question = QUESTIONS[parseInt(element.question)].Question;
                    }

                    if(question_percent <  worst_question_percent){
                        worst_question_percent = question_percent;
                        worst_question = QUESTIONS[parseInt(element.question)].Question;
                    }
                });

                correct += " | " + (round(correct/total,2) * 100) + "%";

                $("#stats_questions_answered span").html(total);
                $("#stats_correct span").html(correct);
                $("#stats_top_question span").html(top_question);
                $("#stats_worst_question span").html(worst_question);
                $("#stats_top_category span").html(top_cat);
                $("#stats_worst_category span").html(worst_cat);

            }else{
                alert.error("No JSON Data Returned");
            }

        });
    }
    
    function closeStats(){
        $("#menu").show();
        $("#stats").hide();
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

    // Ultility Functions..
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

}(jQuery));

