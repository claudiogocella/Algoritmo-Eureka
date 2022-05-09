//Algoritmo Eureka
let contador: number = 1;
let claveIngresada: string;
while (contador <= 3 && clave != "eureka") {
  claveIngresada = prompt("Introduzca la clave");
  contador++;
}
if (clave == "eureka") {
  console.log("Clave correcta");
} else {
  console.log("Ya no tiene más intentos");
}
