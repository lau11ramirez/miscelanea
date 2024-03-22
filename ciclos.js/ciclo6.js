console.log("Ingrese dos numeros");

console.log("Primer numero:");
let a = 2;
console.log(a);

console.log("Segundo numero:");
let b = 27;
console.log(b);

console.log("Numeros comprendidos");
 if (a >= b) {
        console.log("El primer número debe ser menor que el segundo.");
        return;
    }
    for (let i = a; i <= b; i++) {
        console.log(i);
    }