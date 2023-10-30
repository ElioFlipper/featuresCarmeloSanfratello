// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
//   const numbers = [1, 2, 3];
//   console.log(sum(numbers[0], numbers[1], numbers[2]));

function sum(...num) {
    let sum = 0;
    for (el of num) {
        sum += el
    }
    return sum
}
console.log(sum(1,2,3))

 