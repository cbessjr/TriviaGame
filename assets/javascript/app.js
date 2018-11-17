// Array of objects to store the questions and answers
//Each question is an object containing the correct answer
//reference for the array: 


var quesAnsw =    [ {

    Question: "What color is the sky?",
    Selection: ["red", "green", "blue"],
    Answer: 2
},

{
    Question: "How many months in a year?",
    Selection: ["twelve", "fifteen", "ten"],
    Answer: 0
},

{
    Question: "Who makes the Playstation 4?",
    Selection: ["Microsoft", "Sony", "Nintendo"],
    Answer: 1

}];


 quesAnsw.forEach(function (elem, index){


    var question = $(`
    
    <div>
        <p>${elem.Question}</p>
    </div>
    
    <div>
        <input id = "ques-${index+1}-ans-one" type="radio" name="${index+1}" value="${elem.Selection[0].toLowerCase()}"> ${elem.Selection[0]}
        <input id = "ques-${index+1}-ans-two" type="radio" name="${index+1}" value="${elem.Selection[1].toLowerCase()}"> ${elem.Selection[1]}
        <input id = "ques-${index+1}-ans-three" type="radio" name="${index+1}" value="${elem.Selection[2].toLowerCase()}"> ${elem.Selection[2]}
    </div>

    
    `)



     console.log(elem);
    $("#questions-form").append(question);



 })






var timeLeft = 10;
var secDisplay = $("#seconds-left")

secDisplay.text(timeLeft);

var timerStop = setInterval(tick, 1000 * 1);



//  Step 3:
//  Fill in the blanks to these functions.
function tick() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  secDisplay.text(timeLeft);
  console.log("10 seconds left");

  if (timeLeft > 0) {

    timeLeft--;

  } else {

    var corAns = 0;
    var incAns = 0;

    // alert ("Game Over!!");
    corAns = questionCheck().totalAnsCorrect;
    incAns = questionCheck().totalAnsIncorrect;


    console.log(corAns);
    console.log(incAns);

    alert("Game Over!!");
    alert("Correct Answers " + corAns);
    alert("Incorrect Answers " + incAns);

    clearInterval(timerStop);

  }

}




//_________________________________________________________________________________________________

// //Function to evaluate the correct answers for the user

function questionCheck() {

    var totalAnsCorrect = 0;
    var totalAnsIncorrect = 0


    if (document.getElementById("ques-1-ans-three").checked) {

        totalAnsCorrect += 1; 

    } else {

        totalAnsIncorrect += 1; 
    }

    if (document.getElementById("ques-2-ans-one").checked) {

        totalAnsCorrect += 1; //correctAns();

    } else {

        totalAnsIncorrect += 1;  //incorrectAns();
    }

    if (document.getElementById("ques-3-ans-two").checked) {

        totalAnsCorrect += 1  //correctAns();

    } else {

        totalAnsIncorrect += 1  //incorrectAns();
    }


    // totalAnsCorrect = 3;
    return {totalAnsCorrect, totalAnsIncorrect};


}


