const a: string = "Hello world"; 

function getLowerCase(str: string) {
    return str.toLowerCase();
}

console.log(getLowerCase(""));

const b: number = 121;

function add(number1: number, number2:number) {
    return number1 + number2;
}

const substract = (n1:number, n2:number): number => {
    return n1 - n2;
}

substract(12, 8);

add(3, 4);

// Array<T>
const arr3: Array<number | string> = [123, 25, "name"];
const arr: number[] = [1, 2, 3, 4, 5];
const arr1: string[] = ['1', '2', '3', '4', '5'];

// type define 
type numberAndString = number | string | boolean;

const id: numberAndString = "p3";

// Interface creating of a object
interface IPerson {
    name: string;
    age: number;
    hobby?: string;
}

const person:IPerson = {
    name: "Al Amin",
    age: 24,
    hobby: "playing",
}

const person2: IPerson = {
    name: "Mezba",
    age: 21,
    
}

// ENUMS

enum colors{
    color1="ededed",
    color2="ededef",
    color3="ededff",
}
console.log(colors.color1);
;

// Generic
// function _concat<T>(a:T, b:T): T {
//     return a + b;
// }
// _concat<number>(2, 2);
// _concat<string>("Al", "Amin");
