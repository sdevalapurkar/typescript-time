// Example 1
let x: undefined;
console.log(x.name); // object is possibly undefined

// Example 2
let value = 'Hey';
console.log(value.toLowerCase()); // function that only applies to strings
value = 5; // cant assign value to number because it is implicitly a string type

// Example 3
let val: string | number = 'hey';
console.log(val.toLowerCase());
val = 5;
console.log(val.toLowerCase()); // cant call this on number

// Example 4
function isLessThanPointFive() {
  return Math.random < 0.5;
  // operator < cannot be applied to type because Math.random is a function that needs to be called
  // Math.random() is correct
}

// Example 5: Basic logic error
if (value !== 'a') {
  // do a thing
} else if (value === 'b') { // unreachable code since a and b have no overlap
  // do another thing
}

// Example 6: implicit type
let message = 'hello';

// Example 7: explicit type
let amount: number = 40;

// Example 8: basic types
let isValid = true;
let values = [1,2,4];
let someValue: any = 98;

// Example 9: union types
let unionTypeValue: string | number = 5;

// Example 10: interfaces
let animal = {
  weight: 23,
  height: 6,
  isMammal: true
};

// Example 11: interface
interface IAnimal {
  weight: number,
  height: number,
  isMammal: boolean
};

// Example 12: Type
type Animal = {
  weight: number,
  height: number,
  isMammal: boolean
};

// Example 13: when to use Types
type Person = {
  name: string,
  age: number
};

type ReturnPerson = (
  person: Person
) => Person;

const returnPerson: ReturnPerson = (person) => {
  return person;
};

// Example 14
interface IFish extends IAnimal {
  gillLength: 24,
  type: 'Clownfish'
};

// interface IFish and then do type Fish = IFish & IAnimal;

const nemo: IFish = {};

// Example 15: function
function computeSum(a: number, b: number): number {
  return a + b;
}

// Example 16: bad function call
let result = computeSum(10, 'hey'); // incorrect type
let betterResult = computeSum(1, 3);
betterResult. // show autofilling after typing dot

// Example 17: 
function testFunc(x: string, y?: string): string {
  return x + y;
}

// Example 18
function possiblyNull(val: string | null) {
  // need to check to ensure it is not null here
  return val.toLowerCase();
}

// Example 19
interface IEmployee {
  name: string;
  code: number;
}

let employee = { };
employee.name = "John"; // Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; // Compiler Error: Property 'code' does not exist on type '{}'

// Example 20
// generic part is what we put in angle brackets
type numArray = Array<number>;

function getLastElement<T>(arr: T[]) {
  return arr[arr.length - 1];
}

getLastElement([1,2,34]);
getLastElement(['a', 'e', 'y']);


function getFullAddress<T extends { streetNumber: number, streetName: string, city: string }>(obj: T) {
  return {
    ...obj,
    fullAddress: obj.streetNumber + ' ' + obj.streetName + ', ' + obj.city
  }
}

const myAddressObj = getFullAddress({ streetNumber: 2455, streetName: 'Azurite Cres', city: 'Victoria', country: 'Canada' });
