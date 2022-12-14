// Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Log fb to the console to see the output.

// Hint: Check out the remainder/modulo operator: %.

const fb = [];

for (let i = 1; i < 17; i++) {

    //divisible by only three - fizz 
    if (i % 3 === 0 && i % 5 === 0) {
        fb.push("fizzbuzz");
        //divisible by only three - fizz 
    } else if (i % 3 === 0) {
        fb.push("fizz");
        //divisible by only five - buzz
    } else if (i % 5 === 0) {
        fb.push("buzz")
        //in the final else push only the number 
    } else {
        fb.push(i);
    }
}

console.log(fb)