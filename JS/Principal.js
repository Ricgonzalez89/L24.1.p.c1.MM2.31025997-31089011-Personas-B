/* 2. PERSONAS-B
|* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte 
|* al final la edad promedio y la edad mayor entre las mujeres.
|* Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), 
|* Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); 
|* la salida requerida presenta el siguiente formato:
|* Edad promedio: 18.50
|* Edad mayor entre las mujeres: 19
*/
import Cl_persona from "./Cl_persona.js";
import Cl_mayor from "./Cl_mayor.js";

let p1 = new Cl_persona("Luis", 15, "M");
let p2 = new Cl_persona("Ana", 19, "F");
let p3 = new Cl_persona("José", 21, "M");
let p4 = new Cl_persona("Carmen", 17, "F");
let p5 = new Cl_persona("Rosa", 18, "F");
let p6 = new Cl_persona("José", 22, "M");
let p7 = new Cl_persona("María", 17, "F");
let p8 = new Cl_persona("Luz", 19, "F");
let p9 = new Cl_persona("rafael", 23, "M");
let p10 = new Cl_persona("Liz", 15, "F");
let p11 = new Cl_persona("Marcos", 20, "M");
let p12 = new Cl_persona("Leo", 16, "M");
let mayor = new Cl_mayor();

mayor.procesarPersona(p1);
mayor.procesarPersona(p2);
mayor.procesarPersona(p3);
mayor.procesarPersona(p4);
mayor.procesarPersona(p5);
mayor.procesarPersona(p6);
mayor.procesarPersona(p7);
mayor.procesarPersona(p8);
mayor.procesarPersona(p9);
mayor.procesarPersona(p10);
mayor.procesarPersona(p11);
mayor.procesarPersona(p12);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Edad promedio: ${mayor.calcPromedioEdad().toFixed(2)}
<br>Edad mayor entre las mujeres: ${mayor.devolverMayorEdad()}
`;
