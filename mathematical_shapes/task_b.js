// Implementation without function
let semi_perimeter = (5 + 6 + 7) / 2;
let triangle_area = Math.sqrt(
  semi_perimeter *
    (semi_perimeter - 5) *
    (semi_perimeter - 6) *
    (semi_perimeter - 7)
);

console.log(
  `The area of a triangle where lengths of the three of its sides are 5, 6 and 7, is ${triangle_area}.`
);

// Implementation using a function
function task_b(a, b, c) {
  let semi_perimeter = (a + b + c) / 2;
  let triangle_area = Math.sqrt(
    semi_perimeter *
      (semi_perimeter - a) *
      (semi_perimeter - b) *
      (semi_perimeter - c)
  );
  return triangle_area;
}

console.log(
  `The area of a triangle where lengths of the three of its sides are 5, 6 and 7, is ${task_b(
    5,
    6,
    7
  )}.`
);
