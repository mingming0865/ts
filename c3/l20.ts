
let name123: string = '';

//convert to Boolean => Boolean(age)
if (name123) {
    console.log("You can marry me")
}
else {
    console.log("We can only be friends now")
}

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 10 && itemCount <= 15) {
    discount = 10; // 10% discount
}

else {
    discount = 15;
}

console.log(`You got ${discount}% discount. `);