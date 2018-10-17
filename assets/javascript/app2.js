  //  Interval Demonstration
    //  Set our number counter to 69.
    var number = 69;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("You have " + number + " seconds remaining.");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Trivia Game is Finished!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();


    // Question & Answers 
function check(){

    // Will search whole document and look for something called quiz, question number name  value for it 
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var correct = 0;

        if (q1 == "Trenton") {
            correct = correct + 1;
        }
        if (q2 == "Harrisburg") {
            correct = correct + 1;
        }  
        if (q3 == "Instagram") {
            correct = correct + 1;
        }
        if (q4 == "Kylie") {
            correct = correct + 1;
        }   
        if (q5 == "Venus") {
            correct = correct + 1;
        }       

    document.getElementById("after_submit").style.visibility = "visible";    

    //Will Search ID to put what is inside tag You Got _ Answers Correct
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";    
}





numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


var questions = [ {
	question: "The capital of New Jersey is",
	choices: ["Jersey City", "Newark", "Camden", "Trenton"],
	correctAnswer: "Trenton"
}, {
	question: "The capital of Pennysylvania is",
	choices: ["Philadelphia", "Harrisburg", "Pittsburg", "Allentown"],
	correctAnswer: "Harrisburg"
}, {
	question: "What is the platform more frequently used by the youth?",
	choices: ["Myspace", "Twitter", "Instagram", "Facebook"],
	correctAnswer: "Instagram"
}, {
	question: "Who was the sister known now for being a ''self made'' billionaire?",
	choices: ["Kendall", "Kim", "Khloe", "Kylie"],
	correctAnswer: "Kylie"
}, {
	question: "Which of these 4 planets have no satellites?",
	choices: ["Venus", "Earth", "Mars", "Jupiter"],
	correctAnswer: "Venus"
}
];
// console.log (questions[1].question);

// Defined variables 
