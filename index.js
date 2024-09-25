// Task 1
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
// console.log(lowest(heights));

// Task 2
function findSmall(names) {
  let smallName = names[0];
  for (let nam of names) {
    if (nam.length < smallName.length) {
      smallName = nam;
    }
  }
  return smallName;
}
const friends = ["rahim", "robin", "rafi", "ron", "rashed", "i"];
console.log(findSmall(friends));
