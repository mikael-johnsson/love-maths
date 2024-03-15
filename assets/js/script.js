//Wait for DOM
//Get button elements and add event listener

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons)
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
        runGame("addition"); 
})

/**
 * The main game "loop"
 */
function runGame(gameType){
    // Creates two random umbers between 1 and 25
    let num1 = Math.floor(Math.random()*25 + 1)
    let num2 = Math.floor(Math.random()*25 + 1)

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks answers against the firts element
 * in the returned array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey! You got it right!")
    } else {
        alert(`Awwww. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`)
    }
    runGame(calculatedAnswer[1])

}

/**
 * Get operands and operatos directly from the dom
 * and return the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText
    if(operator === "+"){
        return [operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting!`
    }
}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(){}

function displayMultiplyQuestion(){}

