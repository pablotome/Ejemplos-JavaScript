console.log("******************************************");
console.log("https://twitter.com/JSAyushThakur/status/1499437948881674256");
console.log("******************************************");
// MAP
console.log("\n********************* MAP *********************");
const name1 = ["Pedro", "Anita", "Valeria", "Pablo"];
name1.map((valor, posicion) => console.log(`${valor} - ${posicion}`));

// FILTER
console.log("\n********************* FILTER *********************");
const name2 = [1, 2, 3, 4, 5];
const num2 = name2.filter((valor2) => valor2 > 2);

console.log("FILTER: " + num2);

// REDUCE
console.log("\n********************* REDUCE *********************");
const name3 = [1, 2, 3, 4, 5];
const num3 = name3.reduce(getSum, 0);

function getSum(total, num) {
  return total + num;
}

console.log("REDUCE: " + num3);

//ARRAY DESTRUCTURING
console.log(
  "\n********************* ARRAY DESTRUCTURING *********************"
);
const array1 = [1, 2, 3, 4, 5, 6];
const [a, b, c, d, e, f] = array1;
console.log(array1);
console.log(a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f);

const [aa, bb, ...otros] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("aa: " + aa);
console.log("bb: " + bb);
console.log(otros);

//OBJECT DESTRUCTURING
console.log(
  "\n********************* OBJECT DESTRUCTURING *********************"
);
const obj1 = { clave1: "valor1", clave2: "valor2" };
const { clave1, clave2 } = obj1;
console.log(obj1);
console.log(clave1 + "-" + clave2);
({ aaa, bbb, ...otrosotros } = {
  aaa: "valor aaa",
  bbb: "valor bbb",
  ccc: "valor ccc",
  ddd: "valor ddd",
  eee: "valor eee",
  fff: "valor fff",
  ggg: "valor ggg",
});
console.log("aaa: ", aaa);
console.log("bbb: ", bbb);
console.log("otrosotros: ", otrosotros);

//DEFAULT VALUES - OBJETO
console.log(
  "********************* DEFAULT VALUES - OBJETO *********************"
);
const nombres1 = { nombre1: "Pablo", apellido: "Tome" };
const { nombre1, nombre2 = "Andres", apellido } = nombres1;
console.log("nombres1: ", nombres1);
console.log("nombre1: ", nombre1);
console.log("nombre2: ", nombre2);
console.log("apellido: ", apellido);

//DEFAULT VALUES - ARRAY
console.log(
  "\n********************* DEFAULT VALUES - ARRAY *********************"
);
const valoresA1 = ["Pablo", "Tome"];
const [nombreA1, nombreA3, nombreA2 = "Andres"] = valoresA1;
console.log("valoresA1: ", valoresA1);
console.log("nombreA1: ", nombreA1);
console.log("nombreA2: ", nombreA2);
console.log("nombreA3: ", nombreA3);

//SWAP VALUES
console.log("\n********************* SWAP VALUES *********************");
let valor1 = "Pablo";
let valor2 = "Tome";
console.log("valor1: ", valor1);
console.log("valor2: ", valor2);
[valor1, valor2] = [valor2, valor1];
console.log("valor1: ", valor1);
console.log("valor2: ", valor2);

let valor3 = [1, 2, 3];
console.log("valor3: ", valor3);
[valor3[1], valor3[2]] = [valor3[2], valor3[1]];
console.log("valor3: ", valor3);

//PARSING AN ARRAY RETURNED FROM A FUNCTION
console.log(
  "\n********************* PARSING AN ARRAY RETURNED FROM A FUNCTION *********************"
);

function func1() {
  return [1, 2];
}

let f1, f2;
[f1, f2] = func1();
console.log("f1: ", f1);
console.log("f2: ", f2);

//IGNORING RETURNED VALUES
console.log(
  "\n********************* PARSING AN ARRAY RETURNED FROM A FUNCTION *********************"
);

function func2() {
  return [1, 2, 3];
}

let fb1, fb3;
[fb1, , fb3] = func2();
console.log("f1: ", fb1);
console.log("f3: ", fb3);
