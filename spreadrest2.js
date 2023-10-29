// The sum function has a high numbers of parameters. 
// How can we improve the code in order to make it accept any amount of numbers to sum as its argument?

function sum(num1, num2, ...rest) {
    let newArr = [num1, num2, ...rest]
    return newArr = [newArr.reduce((a,b, ...rest) => a + b)];
}

console.log(sum(1, 2, 3, 4, 5));
