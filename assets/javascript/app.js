// Array of objects to store the questions and answers
//Each question is an object containing the correct answer
//reference for the array: 

//attempted to create an array/object to hold the information for the questions. No success getting anything to display dymanically

// var quesAnsw = ["red", "green"];
    //{

//     Question: "What color is the sky?",
//     Selection: ["red", "green", "blue"],
//     Answer: 2
// },

// {
//     Question: "How many months in a year?",
//     Selection: ["twelve", "fifteen", "ten"],
//     Answer: 0
// },

// {
//     Question: "Who makes the Playstation 4?",
//     Selection: ["Microsoft", "Sony", "Nintendo"],
//     Answer: 1
//}];


// document.getElementById("test").innerHTML = quesAnsw[0];


//_________________________________________________________________________________________________


//Functions Functions Functions....
//Start Function, use .html method

// function Start {

//     $("#start-game").html()


// }


//Use the form tag
//Look up radio input

// if(document.getElementById('gender_Male').checked) {
//     //Male radio button is checked
//   }else if(document.getElementById('gender_Female').checked) {
//     //Female radio button is checked
//   }


//_________________________________________________________________________________________________

//Function set the timer at 15 seconds
//Worry about updating the div after the timer works
//Timer for the form. Reference simpleRTimer (Timers, activity 8)

//Additional timer references: 
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout2
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2



//attmepted to modidy the simple timer program to use here with no success

// for (var i = setTimeout(1000 *1); i < 31; i++) {

// setTimeout(oneSeconds, 1000 * 1);
// setTimeout(timeUp, 1000 * 30);

// function oneSeconds() {
//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function timeUp() {
//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");

// }

// // };


//_________________________________________________________________________________________________

// //Function to evaluate the correct answers for the user

function questionCheck() {

var totalAnsCorrect = 0;
var totalAnsIncorrect = 0


if (document.getElementById("ques-one-ans-three").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

if (document.getElementById("ques-two-ans-one").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

if (document.getElementById("ques-three-ans-two").checked) {

    totalAnsCorrect = totalAnsCorrect + correctAns();

} else {

    totalAnsIncorrect = totalAnsIncorrect + incorrectAns();
}

    return totalAnsCorrect
    return totalAnsIncorrect

}


function correctAns() {

    var correctAns = 0; 
    correctAns++;

    return correctAns;

}

function incorrectAns() {

    var incorrectAns = 0;
    incorrectAns++;

    return incorrectAns;

}

//Google the evaluation of the checked radio buttons
//.HTML to show the total correct and incorrect screen



//Bonus, restart button

