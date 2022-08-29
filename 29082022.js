const saludar=(nombre)=>`Hola ${nombre}`;
// Mostrar el resultado por consola
console.log(saludar('Ayrton'));


const mult = (a, b) => a * b
// Mostrar el resultado por consola
console.log(mult(3, 15))


const Alumno = (nombre, apellido, edad, materias) => {nombre, apellido, edad, materias};
// Mostrar el resultado por consola.
console.log(Alumno('Ayrton', 'Caceres', '22', ['TLPA','Base de Datos','Inglés']))


const devolverFecha = (dia, mes, año) => `${dia}/${mes}/${año}`
// Mostrar el resultado por consola.
console.log(devolverFecha(29, 08, 2022));
