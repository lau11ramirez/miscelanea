
let numero1 = 1
console.log("Por favor ingresa el primer numero entero positivo:");
let numero2 = 144
console.log("Por favor ingresa el segundo numero entero positivo:");
let numero3 = 25
console.log("Por favor ingresa el tercer numero entero positivo:");


if (numero1 < 0 || numero2 < 0 || numero3 < 0) {
    console.log("Por favor ingresa solo numeros enteros positivos.");
} else {
    
    let menor = numero1;
    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }

    let mayor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    console.log("El menor numero es: " + menor);
    console.log("El mayor numero es: " + mayor);
}
