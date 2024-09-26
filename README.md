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

## 4. Find Average Price Number from Array of Objects in JavaScript

```
function findAveragePrice(phones) {
  let sum = 0;
  for (let phone of phones) {
    sum = sum + phone.price;
  }
  const average = sum / phones.length;
  return Math.round(average);
}
const phones = [
  { model: "Phone1", brand: "iphone", price: 95000 },
  { model: "Phone2", brand: "samsung", price: 40000 },
  { model: "Phone3", brand: "oppo", price: 26000 },
  { model: "Phone4", brand: "nokia", price: 35000 },
  { model: "Phone5", brand: "iphone", price: 105000 },
  { model: "Phone6", brand: "HTC", price: 48000 },
];
console.log(findAveragePrice(phones));

```
