console.log("Bienvenido al conversor de temperaturas.");
console.log("Por favor, seleccione una opción:");
console.log("1. Convertir de Celsius a Kelvin.");
console.log("2. Convertir de Celsius a Fahrenheit.");

let opcion = Number(prompt("Por favor, seleccione una opción:"));

if (!isNaN(opcion) && opcion == 1) {
    let tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius:"));

    while (isNaN(tempCelsius) || tempCelsius < -273.15) {
        alert("Por favor, ingrese un número válido (>= -273.15 °C).");
        tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius"));
    }

    let tempKelvin = tempCelsius + 273.15;
    console.log(tempCelsius + "°C equivalen a " + tempKelvin.toFixed(2) + "K.");

} else if (!isNaN(opcion) && opcion == 2) {
    let tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius:"));

    while (isNaN(tempCelsius) || tempCelsius < -273.15) {
        alert("Por favor, ingrese un número válido (>= -273.15 °C).");
        tempCelsius = Number(prompt("Por favor, ingrese Temperatura en grados Celsius"));
    }

    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    console.log(tempCelsius + "°C equivalen a " + tempFahrenheit.toFixed(2) + "°F.");

} else {
    alert("Opción inválida. Por favor, seleccione 1 o 2.");
}

