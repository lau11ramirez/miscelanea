function sumarCuadrados() {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i * i;
    }
    console.log("La suma de los cuadrados de los primeros 100 números naturales es: " + suma);
}
sumarCuadrados();