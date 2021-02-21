const a = Math.floor(Math.random() * 10);

let b = prompt("Guess the number from 0 - 10");

while (true) {
    if (a === +b) {
        alert("Correct");
        break;
    }
    else if (b === null) {
        alert("Endgame");
        break;
    }
    else if (a !== b) {
        b = prompt("Try Again")
    }
};
