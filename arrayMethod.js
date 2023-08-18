// Array Methods -----

const emptyArray = [];
const array = [
  "ram",
  "shyam",
  "kunal",
  "dev",
  "kasyap",
  "keshav",
  "dharmendra",
];

const num = [100, 150, 1000, 500, 1023, 1003];

const arrayName = [
  {
    id: 1,
    name: "python",
    value: 300,
  },
  { id: 2, name: "C++", value: 500 },
  {
    id: 3,
    name: "java",
    value: 350,
  },
  {
    id: 4,
    name: "Javascript",
    value: 400,
  },
];
// ----------------------   1>>> For-Of Loop ---------------------------
/* Syntex >>> for(let values of arrayName){
    console.log(values);
} */

for (let values of array) {
  console.log(values);
}

// ----------------------- 2>>> For-Each Loop --------------------------
// Syntex >>> array.forEach("callback funtion(ind, items, )")

array.forEach(function (values, ind) {
  console.log("Current indexing is :", ind, "and its values is :", values);
});

arrayName.forEach(function (values) {
  emptyArray.push(`${values}, "50% Discount", ${values.value * 0.5}`);
});
console.log(emptyArray);

// ------------------------3>>> Map() Method ---------------------------
// Syntex >>>  arrayName.map("callback Function(items , ind , arrayName )");

const newArray = arrayName.map(function (items, ind) {
  return `${items.id}, "50% Discount", ${items.value * 0.5}`;
});

console.log(newArray);

// ------------------------4>>> Filter() Method ---------------------------
// Syntex >>>  arrayName.filter("callback Function(items , ind , arrayName )");

const arrayFilt = arrayName.filter(function (item, ind) {
  if (item.value > 450) {
    return item;
  } else {
    return false;
  }
});

console.log(arrayFilt);

// ------------------------5>>> Reduce() Method ---------------------------
// Syntax >>> arr.reduce(callback funtion(), intialValue);
// Syntex >>>  arrayName.reduce("callback Function(accumulator, currentValur, currentIndex , array) , intialValue);

const price = arrayName.reduce(function (acc, item, ind) {
  acc = acc + item;
  return acc;
}, 0);
console.log(price);

// ------------------------6>>> Every() Method ---------------------------
// Syntax >>> arr.every(callback funtion(currentValue , currentIndex , array));

const everyFun = array.every(function (item, ind) {
  return typeof item == "string";
});

console.log(everyFun);

console.log(typeof array);

// ------------------------6>>> Find() Method ---------------------------
// Syntax >>> arr.find(callback funtion(currentValue , currentIndex , array));

const search = array.find(function (item, ind) {
  return item == "dev";
});

console.log(search);

// ------------------------7>>> sort() Method ---------------------------
// Syntax >>> sort();

const sorted = array.sort();
console.log(sorted); // sort() method working only string values

console.log(num.sort()); // sort() method not working in numeric values replacer comparing.

const numSorted = num.sort(function (a, b) {
  // This method will work sorted in numeric values in Num values by camparing values.
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});

console.log(numSorted);
