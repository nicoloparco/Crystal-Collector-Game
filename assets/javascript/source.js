$(document).ready(function () {
 
var wins = 0;
var losses = 0;
var startingScore = 0;
var currentScore = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;



//Function to generate random number for each crystal using for loop
function crystalNumbers () {
    
    $(".crystals").each(function () {
        var randomNumber = Math.floor(Math.random() *11)+1;
        $(this).attr({
            "class": "crystalData",
            "data-number": randomNumber
        })
    })
};

//Function to generate target number for each game
function generateNumber () {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#goal-number").append(targetNumber);
}

crystalNumbers();
generateNumber();


//Function to add value of crystal to current score on click
$(".crystalData").on("click", function () {
    
    var value = Number($(this).attr("data-number"));

    currentScore = startingScore += value;
    $("#current-number").text(currentScore);
    winLose();
});

//Win and loss function
function winLose () {
    if(currentScore === targetNumber) {
        wins++ ;
        $("#wins").text(wins);
        resetGame();
    }
    else if (currentScore > targetNumber) {
        losses++ ;
        $("#losses").text(losses);
        resetGame();

    }
};

//Reset function
function resetGame () {
    $("#current-number").empty();
    startingScore = 0;
    $("#goal-number").empty();
   
    crystalNumbers();
    generateNumber();
}



})

