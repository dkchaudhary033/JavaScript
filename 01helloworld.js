// let a = "hello world";

// console.log(a);

// console.log("kya hua");

// let b = 10;

// console.log(b);

// let c = "deepak";

// console.log(c[2]);

// let foo = function abc(number){
//     console.log("this function returns:" + this);
//   }
//   foo(12);

//   let arrow = ()=>{
//     console.log("This returns: " + this)
//   }
//   arrow();

let str = !!NaN;
let obj = new String("deepak");
console.log(typeof obj);
console.log(obj.length);
console.log(str);

let array = [2, 50, 54, 9, 5, 3, 5];
// array.splice(0,3);
console.log(array);
console.log(array.join("+"));
let mess = "this is my pen";
console.log(mess.split(""));
console.log(array.reverse());
console.log(array.sort());
let item = array.map(function (value) {
  return `student_no` + value;
});
console.log(item);

// let totalSum = array.reduce((0,2)=>0+2,0);
