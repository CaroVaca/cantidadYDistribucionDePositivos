// Cantidad y Distribucion de Positivos
//Leer valores del usuario hasta que introduzcas un 0,
// el usuario debe ingresar tantos valores positivos como negativos
// y al final deben ser contados los valores introducidos, los positivos y los negativos

let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcentajeDePositivos: number = 0;
let num: number = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingrese un número"));
}
if (cantTotal > 0) {
  porcentajeDePositivos = (cantPositivos * 100) / cantTotal;
  console.log(
    cantPositivos,
    "positivos ",
    porcentajeDePositivos,
    " % del total."
  );
}
