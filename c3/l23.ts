let counter = 0;

// while (counter < 5) {
//     console.log(counter);
//     counter++;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

while (true) {
    console.log("counter = ", counter);
    if (counter % 2 === 1) break;
    counter++;
}