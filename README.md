## 1. Lowest number in the Array

```
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
console.log(lowest(heights));

```

## 2. Smallest string in the Array

```
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

```

## 3. Simple calculate in javaScript Function

```
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

```
