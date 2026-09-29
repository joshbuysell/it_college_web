// Варіант 1

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const multiply = function (a, b) {
  return a * b;
};

const power = (a, b) => a ** b;

function harmonicSeries(n) {
  if (n <= 1) {
    return 1;
  }
  return 1 / n + harmonicSeries(n - 1);
}

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

function applyFunction(value, func) {
  return func(value);
}

function processSet(set, callback) {
  const result = [];
  for (const item of set) {
    result.push(callback(item));
  }
  return result;
}

// Варіант 2

function findMax(a, b) {
  return a > b ? a : b;
}

const subtract = function (a, b) {
  return a - b;
};

const sqrt = (n) => Math.sqrt(n);

function geometricProgression(n, a, r) {
  if (n <= 1) {
    return a;
  }
  return a * (r ** (n - 1)) + geometricProgression(n - 1, a, r);
}

function createDivider(divisor) {
  return function (number) {
    return number / divisor;
  };
}

function applyOperation(a, b, func) {
  return func(a, b);
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const numbersSet1 = new Set([1, 2, 3, 4, 5]);

console.log("=== Варіант 1 ===");
console.log("1. calculateSum(10):", calculateSum(10));
console.log("2. multiply(6, 7):", multiply(6, 7));
console.log("3. power(2, 5):", power(2, 5));
console.log("4. harmonicSeries(4):", harmonicSeries(4).toFixed(4));
console.log("5. createMultiplier(2)(8):", double(8), "| createMultiplier(3)(8):", triple(8));
console.log("6. applyFunction (подвоєння 9):", applyFunction(9, (x) => x * 2));
console.log("   applyFunction (квадрат 9):", applyFunction(9, (x) => x ** 2));
console.log("7*. processSet([1,2,3,4,5], x => x * 10):", processSet(numbersSet1, (x) => x * 10));

const divideBy2 = createDivider(2);
const divideBy5 = createDivider(5);
const numbersSet2 = new Set([2, 4, 6, 8]);

console.log("\n=== Варіант 2 ===");
console.log("1. findMax(14, 25):", findMax(14, 25));
console.log("2. subtract(20, 8):", subtract(20, 8));
console.log("3. sqrt(81):", sqrt(81));
console.log("4. geometricProgression(4, 2, 3):", geometricProgression(4, 2, 3));
console.log("5. createDivider(2)(20):", divideBy2(20), "| createDivider(5)(20):", divideBy5(20));
console.log("6. applyOperation (додавання 12 і 8):", applyOperation(12, 8, (a, b) => a + b));
console.log("   applyOperation (множення 12 і 8):", applyOperation(12, 8, (a, b) => a * b));
console.log("7*. processSet([2,4,6,8], x => x ** 2):", processSet(numbersSet2, (x) => x ** 2));

if (typeof document !== "undefined") {
  const v1Items = [
    ["1. Сума чисел від 1 до n", "calculateSum(10)", calculateSum(10)],
    ["2. Множення двох чисел", "multiply(6, 7)", multiply(6, 7)],
    ["3. Піднесення до степеня", "power(2, 5)", power(2, 5)],
    ["4. Гармонічний ряд", "harmonicSeries(4)", harmonicSeries(4).toFixed(4)],
    ["5. Замикання-множник", "createMultiplier(2)(8) / (3)(8)", `${double(8)} / ${triple(8)}`],
    ["6. applyFunction", "applyFunction(9, fn)", `${applyFunction(9, (x) => x * 2)} / ${applyFunction(9, (x) => x ** 2)}`],
    ["7*. processSet", "processSet(Set(1..5), x => x * 10)", `[${processSet(numbersSet1, (x) => x * 10).join(", ")}]`]
  ];

  const v2Items = [
    ["1. Максимальне з двох чисел", "findMax(14, 25)", findMax(14, 25)],
    ["2. Віднімання b від a", "subtract(20, 8)", subtract(20, 8)],
    ["3. Квадратний корінь", "sqrt(81)", sqrt(81)],
    ["4. Геометрична прогресія", "geometricProgression(4, 2, 3)", geometricProgression(4, 2, 3)],
    ["5. Замикання-дільник", "createDivider(2)(20) / (5)(20)", `${divideBy2(20)} / ${divideBy5(20)}`],
    ["6. applyOperation", "applyOperation(12, 8, fn)", `${applyOperation(12, 8, (a, b) => a + b)} / ${applyOperation(12, 8, (a, b) => a * b)}`],
    ["7*. processSet", "processSet(Set(2,4,6,8), x => x ** 2)", `[${processSet(numbersSet2, (x) => x ** 2).join(", ")}]`]
  ];

  const renderList = (id, items) => {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = items
      .map(([title, call, res]) => `<li><span>${title}: <span class="code-call">${call}</span></span><span class="result-val">→ ${res}</span></li>`)
      .join("");
  };

  renderList("variant1-list", v1Items);
  renderList("variant2-list", v2Items);
}
