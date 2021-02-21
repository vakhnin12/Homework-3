let i;

for (i = 10; i <= 20; i++) {
    document.write(`${i}, `);
};

let expon = 2;
for (i = 10; i <= 20; i++) {
    console.log(i + "^" + expon + "=" + i ** expon + ", ")
};

console.log("");

for (i = 1; i <= 9; i++) {
    console.log(7 + "*" + i + "=" + 7 * i)
};

console.log("");

let sum = 0;

for (i = 1; i <= 15; i++) {
    sum = sum + i;
}
console.log("sum 1-15", sum);

console.log("");


for (i = 15; i <= 35; i++) {
    sum = i * i;
    console.log(i + "*" + i + "=" + sum);
};

console.log("");

let average;

for (i = 1; i <= 500; i++) {
    sum = sum + i;
    average = sum / 500
};
console.log("average 1-500", average);

console.log("");

let sumEven = 0;

for (i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i;
    };


};
console.log("sum even 30 - 80", sumEven);

console.log("");

for (i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log("multiple to 3", i);
    };
};

console.log("");

for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 9; j++) {
        console.log(i + " * " + j + " = " + i * j)
    }
    console.log("")

} console.log("");

