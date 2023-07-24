// todo forma combencional en deifnir dentro de un array que contenga number's  o string's pueden ir n cantidad de elementos dentro del array
const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 'AS'];

// todo las tuplas tines que retornar el orden de tipo de dato  y la canditdad de tipos de datos que se estan definiendo
// todo en este caso solo se puede usar un retorno de string y un retorno de number
let user: [string, number];
user = ['daniel', 3];
// todo como desestructurar una tupla
user = ['daniel', 12];
const [username, age] = user;
console.log(username);
console.log(age);
