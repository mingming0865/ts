let sum6 = (x, y, z = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum6 = ", sum6(1, 2), sum6(1, 2, 3))
// sum6(1, 2) => z = undefined => 0
// sum6(1, 2, 3) => z = 3