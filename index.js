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
const friends = ["shuvo", "robin", "rafi", "ron", "rashed"];
// console.log(findSmall(friends));

// Task 3
function calculateBudget(laptopQuantity, tableQuantity, mobileQuantity) {
  const laptopPrice = 55000;
  const tabletPrice = 75000;
  const mobilePrice = 20000;

  const laptopCost = laptopPrice * laptopQuantity;
  const tableCost = tabletPrice * tableQuantity;
  const mobileCost = mobilePrice * mobileQuantity;

  const total = laptopCost + tableCost + mobileCost;
  return total;
}
console.log(calculateBudget(1, 2, 3));
