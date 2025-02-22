"use strict";
//1. Arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[4]);
//2. OUtra sintaxe de array
const nums = [100, 200];
nums.push(300);
console.log(nums);
//3. Any
const arr1 = [1, "Testes", true, [], { nome: "Jhoseff" }];
console.log(arr1);
//4. Tipos de parâmetros
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
//5. Tipos de retorno
function greetings(name) {
    return `Olá ${name}`;
}
console.log(greetings("Jhoseff"));
//6. Funções anonimas
setTimeout(function () {
    const sallary = 1000;
    //console.log(sallary)
}, 2000);
//7. Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
passCoordinates({ x: 10, y: 20 });
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//8. Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A " + a);
    console.log("B " + b);
    if (c) {
        console.log("C " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//9. Validação de parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Jhoseff", "Mascarenhas"));
console.log(advancedGreeting("Jhoseff"));
//10. Union Types
function showAge(age) {
    console.log(`A idade é ${age}`);
}
showAge(30);
showAge("37");
//11. Avançando em Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(true));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
