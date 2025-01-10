function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}

function runInfinity(): never {
    console.log(">>> run inside runInfinity")
    while (true) {
        // console.log("running...")
    }
    console.log(">>> run bottom runInfinity")
}

// handleException("just a test error");

let a = runInfinity();
console.log(">> check a = ", a)