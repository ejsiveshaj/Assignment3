const PI = 3.141592653589793;

// Implementation without function
console.log(
  `The circumference and surface area of a circle whose radius is 4, are respectively ${
    2 * PI * 4
  } and ${PI * Math.pow(4, 2)}.`
);

// Implementation using a function
function task_c(r) {
  return [2 * PI * r, PI * Math.pow(r, 2)];
}

console.log(
  `The circumference and surface area of a circle whose radius is 4, are respectively ${
    task_c(4)[0]
  } and ${task_c(4)[1]}.`
);
