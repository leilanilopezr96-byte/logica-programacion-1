// Solicitando los datos al usuario. Se convierten a number y se guardan en variables
let num1 = Number(prompt("Ingrese el primer número:"));
while (isNaN(num1)) {
  alert("Por favor, ingrese un número válido.");
  num1 = Number(prompt("Ingrese el primer número:"));
}
let num2 = Number(prompt("Ingrese el segundo número:"));
while (isNaN(num2)) {
  alert("Por favor, ingrese un número válido.");
  num2 = Number(prompt("Ingrese el segundo número:"));
}
let num3 = Number(prompt("Ingrese el tercer número:"));
while (isNaN(num3)) {
  alert("Por favor, ingrese un número válido.");
  num3 = Number(prompt("Ingrese el tercer número:"));
}

// Análisis: número mayor, número del centro y númro menor
let numeros = [num1, num2, num3];
if (num1 === num2 && num2 === num3) {
  console.log("Los números son iguales."); // Revisa si los tres números son iguales.
} else {
  let numerosAscendente = numeros.sort((a, b) => a - b); // Se usa sort, pero se introduce función para comparar y ordenar números
  let numerosDescendente = [...numeros].reverse(); // Se modifica para invertir orden

  // Imprimir resultados
  console.log("Números de menor a mayor: " + numerosAscendente);
  console.log("Números de mayor a menor: " + numerosDescendente);
  console.log("Número mayor: " + numerosDescendente[0]);
  console.log("Número del centro: " + numerosDescendente[1]);
  console.log("Número menor: " + numerosDescendente[2]);
}
