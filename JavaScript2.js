console.log("******************************************");
console.log("https://twitter.com/JSAyushThakur/status/1509211530705125376");
console.log("******************************************");

// SPREAD OPERATOR
console.log("\n********************* SPREAD OPERATOR *********************");
const arr1 = [1, 2, 3, 4];
const arr2 = [-1, 0, ...arr1];
console.log(arr1);
console.log(arr2);

const arr3 = ["A", "B", "C", "D"];
const arr4 = [...arr1, "E", "F"];
console.log(arr3);
console.log(arr4);

console.log(
  "\n********************* SPREAD OPERATOR - OBJECT *********************"
);
const school = { name: "Ayush", age: 21, gender: "male" };
const updateSchool = { ...school, name: "Ravi", age: 22, gender: "male" };
console.log(school);
console.log(updateSchool);

console.log(
  "\n********************* CLONING AN OBJECT AND ARRAY *********************"
);
const arr5 = ["A", "B", "C", "D"];
const arr6 = [...arr5];
console.log(arr6);

console.log("\n********************* MERGING ARRAYS *********************");
const arr7 = ["A", "B", "C", "D"];
const arr8 = ["E", "F", "G", "H"];
console.log([...arr7, ...arr8]);

console.log("\n********************* MERGING OBJECTS *********************");
const persona = { nombre: "Pablo", edad: 45, apellido: "Tome" };
const vehiculo = { marca: "Toyota", modelo: 2021, version: "Corolla" };
console.log({ ...persona, ...vehiculo });

console.log(
  "\n********************* REST OPERATOR - ARRAYS *********************"
);
const arr9 = [1, 2, 3, 4, 5, 6];
const [A, B, C, ...otros] = arr9;
console.log(arr9);
console.log(A);
console.log(B);
console.log(C);
console.log(otros);

console.log(
  "\n********************* REST OPERATOR - OBJECTS *********************"
);
const persona2 = {
  nombre: "Pablo",
  edad: 45,
  apellido: "Tome",
  nombreEsposa: "Valeria",
  nombreHijo: "Pedro",
  nombreHija: "Anita",
};
const { nombre, edad, ...otrosDatos } = persona2;
console.log(persona2);
console.log(nombre);
console.log(edad);
console.log(otrosDatos);

console.log(
  "\n********************* REST OPERATOR - FUNCTIONS *********************"
);
function suma(...numeros) {
  let total = 0;
  for (let i of numeros) total += i;
  return total;
}
console.log(suma(1, 2, 3));
console.log(suma(1, 2, 3, 4, 5, 6));
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9));

function suma2([...numeros]) {
  let total = 0;
  for (let i of numeros) total += i;
  return total;
}
console.log(suma2([1, 2, 3]));
console.log(suma2([1, 2, 3, 4, 5, 6]));
console.log(suma2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(suma2(arr9));
