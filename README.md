## Lowest number in the Array

`// Task 1
function lowest(numbers) {
  let lowestNumber = numbers[0];
  for (let num of numbers) {
    if (num < lowestNumber) {
      lowestNumber = num;
    }
  }
  return lowestNumber;
}
const heights = [67, 90, 20, 65, 37, 2, -10];
console.log(lowest(heights));`
