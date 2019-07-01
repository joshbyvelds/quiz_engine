(function(){

    function setupMainMenu(){
        $(".game_start_btn").off().on("click", function(){
            loadQuiz($(this).attr("data-mode"));
        });

        $("#stats_btn").off().on("click", function(){showStats();});
    }

    function loadModeOne() {
        
    }

    function loadModeTwo(){

    }

    function loadModeThree(){

    }

    function loadQuiz(mode){
        switch(parseInt(mode)){
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
        alert("Show Stats");
    }

    function init(){
        setupMainMenu();
    }

    $(document).ready(init);
}());

