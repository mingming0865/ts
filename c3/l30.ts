let sum6 = (x: number, y: number, z = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum6 = ", sum6(1, 2), sum6(1, 2, true))