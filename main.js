//OBJETO DATE
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

//Timestamp: 01enero 1970-< actualidad
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(fechaActual);

let fechaConTimestamp = new Date();
console.log(fechaConTimestamp);

//STRING
let fechaConString = new Date("");
console.log(fechaConString);

//Date(año,mes,fecha,horas,minutos,segundos,ms)
let fechaConparametos=newDate(2018,11,1);
console.log(fechaConParametros);

//Setters
fechaConParametros.setFullYear(1980);
console.log(fechaConParametros);

//Ejercicio 1: Mostrar la fecha actual con los dias de la semana en español con el siguiente formato: Domingo 25 de julio de 2021
let fecha = new Date(),
console.log(fecha.getDay());
console.log(fechaDate());
console.log(fecha.getFullYear());

let diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log(diaSemana[fecha.getDay()]);
let mesAnyo=["Enero","Febrero", "Marzo","Abril","Mayo","Junio","Julyo","Agosto","Setiembre","Octubre","Noviembre", "Diciembre"];


