//Array in Javascript

const array = [0,1,2,3,4,5,6];
console.log(array);
console.log(array[2]);

//Creation a array elements>>>>>>
array.push(0,7,8);   // creation in end
array.unshift(0,3)
array.splice(3,6,9,8,7);
console.log(array);

// Remove a array elements>>>>>>
array.pop();    //last// its only one element remove in array
console.log(array);
array.shift()   //start// its only one element remove in array
console.log(array);
array.splice(0,3,0,1,2,3); //middle-start-end // they will use all over to removing and adding an elements in array
console.log(array);

//Searching a Elements in a array
// Final array = [0, 1, 2, 3, 8, 7, 0, 7]
console.log(array.includes(3));
console.log(array.indexOf(0,1))

let courses = [{
    no1 : 1,
    name : "deepak"
},
{
    no2 : 2,
    name : "brijesh",
}]

console.log(courses);

let course = courses.find(function(courses){
    return courses.name === "deepak";
});

console.log(course);

//Empty array

let array2 = [1,5,2,2,564,54,58];
let array3 = [5,4,1,2,2,5]
// array2.length = 0;
console.log(array2);
console.log(array2.concat(array3));
// concat() array => [1, 5, 2, 2, 564, 54, 58, 5, 4, 1, 2, 2, 5]
console.log(array3.slice(2,5));


for(let values of array2){
    console.log(values);
}

array2.forEach(element => console.log(element));

// Filtering a array
let array4 = [1,2,6,0,3,0,0,-9,-2,-5,12];
array4.filter(function(element){
    return element === 0;
});
console.log(array4);


const array5 = ["deepak", "briejsh", "amit", "lokesh"];

for(let element of array5){
    console.log(element);
}
console.log(array5result);