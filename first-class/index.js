var a = "Hello world";
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase(""));
var b = 121;
function add(number1, number2) {
    return number1 + number2;
}
var substract = function (n1, n2) {
    return n1 - n2;
};
substract(12, 8);
add(3, 4);
// Types of array
var arr = [1, 2, 3, 4, 5];
var arr1 = ['1', '2', '3', '4', '5'];
var id = "p3";
var person = {
    name: "Al Amin",
    age: 24,
    hobby: "playing"
};
var person2 = {
    name: "Mezba",
    age: 21
};
// ENUMS
var colors;
(function (colors) {
    colors["color1"] = "ededed";
    colors["color2"] = "ededef";
    colors["color3"] = "ededff";
})(colors || (colors = {}));
console.log(colors.color1);
;
