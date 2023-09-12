const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 10));
}
console.log("Random");
console.log(numbers);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
console.log("sum even numbers:", sum);
let sumLessThan5 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 5) {
    sumLessThan5 += numbers[i];
  }
}
console.log("sum numbers less than 5:", sumLessThan5);