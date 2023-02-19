const suma = (n1, n2) => n1 + n2;
const resta = (n1, n2) => n1 - n2;
const multi = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;
const calc = (n1, n2, callback) => callback(n1, n2);
console.log(calc(3, 4, suma));
console.log(calc(3, 4, resta));
console.log(calc(3, 4, multi));
console.log(calc(3, 4, div));

setTimeout( () => {
    console.log('1s')
}, 1000);