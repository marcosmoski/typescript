const obj1: object = {};
// const obj2: object = null; // error

// obj1.foo = "äaaa"; // erro, foo n existe
obj1.toString() // possivel, pois é um objeto. 

const keys = Object.keys(obj1); // retorn as keys do obj 

let obj2: Object = {}; 

obj2 = new Array();
obj2 = new String();

// Object referencia a instancia de um objeto, como no javascript tudo é objeto
// qualquer instancia de qualquer tipo vai funcionar 
// é mto pouco usado 