let message1 = document.querySelector('.msg1');
let message2 = document.querySelector('.msg2');
let message3 = document.querySelector('.msg3');

let guessingAns  = document.getElementById('guessingAns');

let chances = 10; //The times the player can guess
let guessedNumbers = []; //The times that the player has guessed

//Generate answer randomly
let answer = Math.floor(Math.random() * 50) + 1;
console.log(answer);

message2.textContent = "Number of Chances to guess: " + chances;

//do the job when player press the "Guess" button
function play() {
    let guessingNumber = Number(document.getElementById('guessingNumber').value);

    //Checking whether the guessed one and answer is equal, equal or not will do according to the following condition

    //to check if the guessed one is within answer's the range
    if (guessingNumber < 1 || guessingNumber > 50) {
        alert("Please Enter Number between 1 to 50");
    }
    //if within range, THEN check correct or wrong, IF wrong then, is it Higher? or Lower?
    else if (guessingNumber > answer) {
        guessingAns.classList.add('wrong');
        message1.textContent = "Your guess is too high";
        chances -= 1;
        message2.textContent = "Number of Chances to guess: " + chances;
        guessedNumbers.push(guessingNumber);
        message3.textContent = "Guessed Numbers are: " + guessedNumbers;
        document.getElementById('guessingNumber').value = ""; 
    } else if (guessingNumber < answer) {
        guessingAns.classList.add('wrong');
        message1.textContent = "Your guess is too low";
        chances -= 1;
        message2.textContent = "Number of Chances to guess: " + chances;
        guessedNumbers.push(guessingNumber);
        message3.textContent = "Guessed Numbers are: " + guessedNumbers;
        document.getElementById('guessingNumber').value = "";
    }
    //if correct then say win
    if (guessingNumber === answer) {
        guessingAns.classList.add('correct')
        message1.textContent = "You have naile it";
        document.getElementById('guessingNumber').value = "";
    }
}
// function restart() {
//     document.getElementById('guessingNumber').value = "";    
//     div.classList.remove('wrong');
//     div.classList.remove('correct');
// }

let restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', () => {
    document.getElementById('guessingNumber').value = "";
    guessingAns.classList.remove('wrong');
    guessingAns.classList.remove('correct');
    message1.textContent = "Your game has sucessfully restart";
    chances = 10;
    message2.textContent = "Numbe of Chances to guess: " + chances;
    guessedNumbers = [];
    message3.textContent = "Guessed Numbers are: " + guessedNumbers;
});