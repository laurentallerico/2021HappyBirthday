let tony = "its tony time";
let tea = "its tea time";
let birthdayYou = "happy birthday you"
let birthdayTony = "happy birthday tony"
let tonyBirthday = "tony happy birthday"
let awww = "i love you"
let awww2 = "i like you"
let cake = "its cake time"
let cake1 = "cake is cool"
let cake2 = "time for cake"
let cake3 = "lets have cake"
let cake4 = "i like cake"

let correctGuesses = { tony: false, tea: false, birthday: false };

let guessArray = [];

window.onload = function () {

    let guess = document.getElementById("guess");

    guess.onkeydown = function (e) {
        if (!guessedAll()) {
            if (e.key === 'Enter') {
                guessArray.push(guess.value)
                checkPhrase(guess.value)
            }
            if (e.key === 'Backspace' || e.key == 'Delete') {
                reset();
            }
        }
    }

    function reset() {
        changeBackground("door");
    }

    function changeBackground(image) {
        document.getElementById("background").src = "images/" + image + ".jpg";
    }

    guess.onclick = function () {
        reset();
    }

    function checkPhrase(phrase) {
        phrase = phrase.replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ").toLowerCase();
        switch (phrase) {
            case tony:
                changeBackground("Tony");
                correctGuesses.tony = true;
                break;
            case tea:
                changeBackground("teapot");
                correctGuesses.tea = true;
                break;
            case awww:
            case awww2:
                changeBackground("heart");
                break;
            case birthdayYou:
            case birthdayTony:
            case tonyBirthday:
                changeBackground("balloons");
                correctGuesses.birthday = true;
                break;
            case cake:
            case cake1:
            case cake2:
            case cake3:
            case cake4:
                changeBackground("cake");
                break;
            default:
                changeBackground("cicada");

        }
        let newGuess = document.createElement("div");
        newGuess.innerText = phrase;
        guesses = document.getElementById("guesses");
        guesses.appendChild(newGuess);

        if (guessedAll()) {
            console.log("did it")
            let end = document.createElement("h1");
            end.setAttribute("size", "100px");
            end.innerText = "YOU DID IT!! You guessed (all?) the phrases. HAPPY BIRTHDAY TO YOUUUUUUUUUUUUUUU! Let me know next tea time :)";
            guesses.appendChild(end);
        }
    }

    function guessedAll() {
        return (correctGuesses.tony === true && correctGuesses.tea === true && correctGuesses.birthday === true);
    }
}




