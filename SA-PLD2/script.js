// Se muestran las opciones en consola, anrtes de iniciar la solicitud de información al usuario.

console.log("Bienvenido al conversor de temperaturas.");
console.log("Por favor, seleccione una opción:");
console.log("1. Convertir de Celsius a Kelvin.");
console.log("2. Convertir de Celsius a Fahrenheit.");

let opcion = Number(prompt("Por favor, seleccione una opción:")); //Se solicita por prompt la conversión a ejecutar.

if (!isNaN(opcion) && opcion == 1) {
    let tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius:")); //Se solicita por prompt el dato a convertir.

    while (isNaN(tempCelsius) || tempCelsius < -273.15) {
        alert("Por favor, ingrese un número válido (>= -273.15 °C).");
        tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius")); // Se valida el tipo de entrada y, de ser necesario, se solicita nuevamente.
    }

    let tempKelvin = tempCelsius + 273.15;
    console.log(tempCelsius + "°C equivalen a " + tempKelvin.toFixed(2) + "K."); //Conversión e impresión de resultado.

} else if (!isNaN(opcion) && opcion == 2) {
    let tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius:")); //Se solicita por prompt el dato a convertir.

    while (isNaN(tempCelsius) || tempCelsius < -273.15) {
        alert("Por favor, ingrese un número válido (>= -273.15 °C).");
        tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius")); // Se valida el tipo de entrada y, de ser necesario, se solicita nuevamente.
    }

    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    console.log(tempCelsius + "°C equivalen a " + tempFahrenheit.toFixed(2) + "°F."); //Conversión e impresión de resultado.

} else {
    alert("Opción inválida. Por favor, seleccione 1 o 2.");
}

