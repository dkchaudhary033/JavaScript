// Create a Object By Using a |Factory Function|
// in factory function always use ":" and "," and end of state use ";"
function createObj() {
    return obj = {
    length : 'Meter',
      height : 'centimeter',
      objCreate : function() {
  console.log("ye hai factory function");},
    };
  }; 
  
  // Opration perform in factory function
  const foo = createObj();
  console.log(foo);
  foo.copy = 23
  foo.color = "red";
  delete foo.color 
  console.log(foo);
  foo.objCreate()
  
  for(let key in createObj){
    console.log(key);}
  


//Create a Object By Using a =>|Construtor Function|
// Always use a "="  and ";"

function Rectrangle(len, wid, hei){
    this.len = len;
      this.wid = wid;
      this.hei = hei;
      this.draw = function()
    {
      console.log("ye hai Construtor function");
    };
    this.color = "green"; 
  }
  
  const construct = new Rectrangle(2, 5, 3);
//   construct.addition = "kamal";
  console.log(construct);
//   construct.constructor;
  
  for(let key in construct){
  console.log(key,"=>", construct[key]);
  }


  // factory function
// in factory function always use ":" and ","
function factrry(){
  return obj = {
    length : 20,
    width: 10,
    height : 30,
    draw : function(){
      console.log("hi mega project");},
    color : "red"
      };
}

const fact = factrry();
console.log(fact);

console.log(Object.keys(fact).length);

// Constrctor function
// in constructor function always use "=" and ";"

function contro(name,age,mobil,coral)
{
  this.name = name;
    this.age = age;
      this.mobil = mobil;
        this.draw1 = function(){
          console.log("contructor function");};
          this.coral = coral;
}

const construct1 = new contro("deepak",28,"nokia","grey");
console.log(construct1);
  