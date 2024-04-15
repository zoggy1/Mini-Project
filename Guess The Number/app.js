let messageOne = document.querySelector('.msg1');
let messageTwo = document.querySelector('.msg2');
let messageThree = document.querySelector('.msg3');
let chance = 10;
let guessedNumbers =[];
let answer = Math.floor(Math.random() * 50 + 1);
messageTwo.textContent = "Number of chances to guess: " + chance;

//Checking Number; If right then win, else show why wrong;
function play() {
    let guessedNumber = Number(document.getElementById('guess_Input').value);

    if (guessedNumber < 1 || guessedNumber > 50) {
        alert("Please Enter The Numbet between 1 to 50");
    } else {
        if (guessedNumber > answer) {
            messageOne.textContent = "Your Number Is Too High";
            chance-=1;
            messageTwo.textContent = "Number of chances to guess: " + chance;
            guessedNumbers.push(guessedNumber);
            messageThree.textContent = "Guessed Numbers are: " + guessedNumbers;
        } else if (guessedNumber < answer) {
            messageOne.textContent = "Your Number Is Too Low";
            chance-=1;
            messageTwo.textContent = "Number of chances to guess: " + chance;
            guessedNumbers.push(guessedNumber);
            messageThree.textContent = "Guessed Numbers are: " + guessedNumbers;
        } else if (guessedNumber === answer) {
            messageOne.textContent = "Congratulation You Have Won This Game!";
        }
    }
};

//to restart the game; won or not;
function restart() {

};