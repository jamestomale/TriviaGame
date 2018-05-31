// Defined variables 

numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


var questions = [ {
	question: "When you’re capernoited, what are you?",
	choices: ["Slighty afraid", "Slightly drunk", "Slightly embarrassed", "Slightly out of tune"],
	correctAnswer: "Slighty drunk"
}, {
	question: "Cleromancy is divination involving what?",
	choices: ["Dice", "Glass", "Twigs", "Ink"],
	correctAnswer: "Dice"
}, {
	question: "What does a nuxodeltiologist prefer postcard scenes of?",
	choices: ["The road", "The trees", "The ocean", "The night"],
	correctAnswer: "The night"
}, {
	question: "What do you have when you’re sciapodous?",
	choices: ["Huge nose", "Huge chin", "Huge feet", "Huge ears"],
	correctAnswer: "Huge feet"
}, {
	question: "What are you full of when you’re gambrinous?",
	choices: ["Beer", "Joy", "Chicken", "Sweat"],
	correctAnswer: "Beer"
},  {
	question: "Tropoclastics is actually the science of",
	choices: ["House keeping?", "Ancient writing?", "Breaking habits?", "Eavesdropping?"],
	correctAnswer: "Breaking habits?"
},  {
	question: "What does ponophobia mean?",
	choices: ["The fear of overheating", "The fear of oversleeping", "The fear of overthinking", "The fear of overworking"],
	correctAnswer: "The fear of overworking"
},	{
	question: "Iatrapistia is the lack of faith in what?",
	choices: ["The medical system", "The judicial system", "The educational system", "The legal system"],
	correctAnswer: "Mance Rayder"
},	{
	question: "Where is the dactylion?",
	choices: ["Thumb", "Forefinger", "Middle finger", "Ring finger"],
	correctAnswer: "Middle finger"
},	{
	question: "What do you love eating as a pagophagiac?",
	choices: ["Fingernails", Ash", "Pips", "Ice"],
	correctAnswer: "Ice"
}
];
// console.log (questions[1].question);


//Prints questions to HTML
for (var i = 0; i < questions.length; i++) {
	var pTag = $("<p>");
	var form = $("<form class='question'>");

	//set our question
	pTag.html(questions[i].question);
	
	for(var j = 0; j < questions[i].choices.length; j++){
		
		var label = $("<label class='radio-inline'>");

		var choice = $("<input type='radio' name='optradio'>");

		//set attributes for choice
		choice.attr("value", questions[i].choices[j]);
		label.append(choice);
		label.append(questions[i].choices[j]);
		form.append(label);
		pTag.append(form);
	}

	$('#questionDiv').append(pTag);


} // end for


//Countdown Timer
var n = 75;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }

   $("#countdown").html(n);

   if (n === 0){
   	grader();
   }


} //end countdown


//Function to grade the results
function grader(){


	//Finds questions.
    var selected = $('.question');
    $.each(selected, function(){
    	var checkBox = $(this).find("input[type=radio]:checked");

    	if (!checkBox.val()){
    		console.log("unanswered");
    		userAnswers.push("unanswered");
    	}
    	if (checkBox.val()) {
    		console.log(checkBox.val());
    		userAnswers.push(checkBox.val());
    	}
    	console.log(userAnswers);
    }) //end of each selected function

	//grades the questions
	for (var i = 0; i < questions.length; i++) {
		if (userAnswers[i]=="unanswered") {
			numberUnanswered++;
		}
		else {

			if (questions[i].correctAnswer==userAnswers[i]) {
				numberRight++;
			}
			if (questions[i].correctAnswer!=userAnswers[i]){
				numberWrong++;
			}
		}
		$("#correct").html(numberRight);
		$("#wrong").html(numberWrong);
		$("#unanswered").html(numberUnanswered);
		console.log(numberUnanswered);
		console.log(numberRight);
		console.log(numberWrong);
	}//end for

} // end grader function




