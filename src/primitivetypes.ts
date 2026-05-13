//Boolean
let isActive: boolean=true;
let hasPermission=false;
console.log(isActive);
console.log(hasPermission);

//Number
let decimal:number=6;
let hex:number=0xf00d; 
let binary:number=0b1010;
let octal:number= 0o744;
let float:number=3.14;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);


//string
let color :string="yellow";
let fullName:string='Krishna Vijayan P';
let age:number=23;
let sentence:string=`Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);

//BigInt
const hugeNumber=BigInt(9007199254740991);
console.log(hugeNumber);

//symbol
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);