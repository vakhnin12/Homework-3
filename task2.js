let i = +prompt("input number");

let j = 0;

let divider = 0;

let sum = 0;

for (j; j <= i; j++) {
    divider = i % j;
    if (divider === 0 && j % 2 === 0) {
        console.log("even divider", j);
        sum = sum + j;
    };
}; console.log("even divider sum", sum)