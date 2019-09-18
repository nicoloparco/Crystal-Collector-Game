$(document).ready(function () {
 
var wins = 0;
var losses = 0;
var startingScore = 0;
var currentScore = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;



//Function to generate random number for each crystal using for loop
function crystalNumbers () {
    for (var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    var crystalNumber = $("<div>");
    crystalNumber.attr({
        "class" : "crystalData",
        "data-number" : randomNumber
    });
    crystalNumber.html(randomNumber);
    $(".crystals").append(crystalNumber);
    }
};

//Function to generate target number for each game
function generateNumber () {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $("#goal-number").append(targetNumber);
}

crystalNumbers();
generateNumber();


//Function to add value of crystal to current score on click
$(".crystals").on("click", function () {
    var value = parseInt($(".crystalData").attr("data-number"));
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
    currentScore = 0;
    $("#goal-number").empty();
    crystalNumbers();
    generateNumber();
}



})

