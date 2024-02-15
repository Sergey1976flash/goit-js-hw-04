function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;

  // Перебираємо значення (кількість товарів) в об'єкті products і додаємо їх до загальної кількості товарів
  for (const key in products) {
    totalProducts += products[key];
  }

  // Перевіряємо, чи загальна кількість товарів менша або дорівнює containerSize
  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
