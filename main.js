console.log("clase de javascript1")
//alert("Precaución!!!")

var variable = 'Variable'
// console.log(variable)
var dato

dato = 10

variable = 'Hola, Mundo!'

const name = "Abel";
const age = 29;
const isCool = true;
const x = null ;
const y = undefined;
// console.log(y)
let z; // undefined
// console.log(z)
z = "algo"
// console.log(z)
// console.log(typeof variable)

/*el console.log se usa cada momento de colocar una variable para visualizar en la pagina, es obligatorio */
/*la variable LET se usa como var pero obliga a tener un codigo mas limpio sin usar el mismo nombre*/
/*Las variables definidas con const no se pueden volver a declarar.
Las variables definidas con const no se pueden reasignar.
Como regla general, siempre usar una variable con const a menos que sepa que el valor de esa variable cambiará.*/
/*Con typeof podemos chequear el tipo de dato de una variable*/ 
//concatenar es hacer un texto y completando con los valores de la variable
//TEMPLATE LITERAL
console.log(`Mi nombre es ${name} y tengo ${age} años`)

let texto = "este texto es para comprobar el length que cuenta cuantas letras y espacios existen en la oraciòin"
console.log(texto.length)
//.toUpperCase() pone las letras en mayúsculas - .toLowerCase() pone todas la letras en minúsculas - .substring extrae los caracteres entre dos índices especificados (0,...5)

//Las arrays almacenan múltiples valores en una variable
const numbers = [1,2,3,7,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
//concatenar
console.log("I like " + fruits[1] + " and " + fruits[0]);
//Template Literal
console.log(`I like ${fruits[1]} and ${fruits[0]}`)
//Metodos de arrays
//.push añade un valor en la posición [...] - .unshift añade un valor al principio - .shift elimina el primer valor de la array - .pop elimina el ultimo  valor de la array - .indexOf consigue el indice
//.splice para eliminar especificos

const person = {
    name: "Abel",
    age: 29,
    hobbies: [
      "music",
      "movies",
      [
        {
          name: "Beisbol",
          team: true,
        },
        {
          name: "Tenis",
          team: false,
        },
      ],
    ],
    address: {
      street: "Elm",
      city: "Maracay",
      state: "ARA",
    },
  };
  //condicionales...
  //Este código está diciendo "si (if)  la condición devuelve verdadero (true),  entonces ejecute el código A, sino (else)  ejecute el código B"
/*= operador de asignación
== comparador
=== comparador tipo de datos
*/
  //condiciones de condiciones
// let person = {
//     age:17,
//     sonOfBoss: true
//   }

//   if (person.age >= 18) {
//     console.log("Eres mayor de edad");
//   } else if (person.sonOfBoss == true) {
//     console.log("No eres mayor de edad pero eres el hijo del jefe");
//   } else {
//     console.log("Eres menor de edad");
//   }

let diaActual = new Date();
const dia_de_la_semana = diaActual.getDay()
switch (dia_de_la_semana) {
  case 1:
    console.log("Es Lunes");
    break;
  case 2:
    console.log("Es Martes");
    break;
  case 3:
    console.log("Es Miércoles");
    break;
  case 4:
    console.log("Es Jueves");
    break;
  case 5:
    console.log("Es viernes");
    break;
  case 6:
  case 7:
    console.log("Es fin de semana");
    break;
  default:
    console.log("Ese día no existe");
}
//como salta el break por el 6 no tener valor (sabado, el dia de hoy o actual) entonces usará el del 7 (es fin de semana)
let a =5
a = a + 5
a = 5
// let b = a / 2
console.log(a);
// console.log(b);
if (age2 > 18 && age2 == 20) {
    console.log("Es falso");
  } else {
    console.log("Es true");
  }
  
//   ! Operador NOT
//   Ejemplo: !false Resultado: true
// && Operador AND - Se tienen que cumplir ambas condiciones (las dos sean “true”) para que devuelva un “true” 
//   Ejemplo: true && false Resultado: false
//                true && true Resultado: true
// || Operador OR - Con que una de las condiciones sea “true” se devolverá un “true”
//   Ejemplo: true || false Resultado: true
//                true || true Resultado: true

// OPERADOR TERNARIO A diferencia de If y Switch, existe un operador (un símbolo) que nos permite hacer una condición con una sintaxis super simplificada. 
// // (condicion)? valor1 : valor2 

//EJERCICIO 1
// Crea una variable llamada nota que sea un número que represente las calificación obtenida de un estudiante. Luego, desarrolla un condicional que muestre por consola un mensaje según la nota del estudiante de la siguiente manera:

// Si la nota de es mayor o igual a 9, muestra "Excelente desempeño académico".
// Si nota está entre 7 y hasta 9(sin incluir), muestra "Buen desempeño académico".
// Si nota está entre 5 y hasta 7(sin incluir), muestra "Normal desempeño académico".
// Si su nota está por debajo de 5, muestra "Necesita mejorar su desempeño académico".

let nota = 3

if(nota >= 9){
  console.log("Excelente desempeño académico");
}else if(nota >=7 && nota<9){
console.log("Buen desempeño académico");
}else if(nota >=5 && nota <7){
console.log("Normal desempeño académico");
}else if(nota < 5){
  console.log("Necesita mejorar su desempeño académico");
}else{
console.log("Esta nota no es valida");
}
//EJERCICIOS
// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

const obj={
}
if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}



