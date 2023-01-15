//function operacion (a,b,c){
//    let resultado = a + b + c;
//    console.log(resultado); }

//operacion(9,9,10);

//const operacion2 = function(x,y,z){
//   return x + y + z; }

//let x = 9;
//let y = 9;
//let z = 10;

//console.log(operacion2(x,y,z));


//------------------------------------------------------------------------------

//const saludar = () => console.log("Hola Bienvenido al Curso de programación"); 

//function saludar (){
//    console.log ("Hola Bienvenido al Curso de programación"); 
//}

//saludar();

//const saludar2 = () => console.log("Hola Bienvenido al Curso de programación");

//saludar2();

//-----------------------------------------------------------------------------------------------------

//let edad = 18;

//const eleccion = function(x){
//    return x;
//}

//eleccion(edad) == 18 ? console.log('Ya eres mayor de edad, Puedes votar!') : console.log('Aun no eres mayor de edad');

//const eleccion2 = () => 18;
//eleccion2(edad) == 18 ? console.log('Ya eres mayor de edad, Puedes votar!') : console.log('Aun no eres mayor de edad');


//-------------------------------------------------------------------------------------------------------------------

//const acceso = {

//    empresa: 'RedGPS',
//    email: 'soporte@redgps.com',
//    password : 'ArgenMex2022',
//    nombre: 'Lisandro',
//    edad: 35,
//}

//console.log(acceso);

// Desestructuracion
//const{empresa, email, nombre} = acceso;
//console.log(empresa, email, nombre);

//const resultado = ({empresa, email, nombre}) =>{
//    console.log(empresa, email, nombre);
//}

//resultado(acceso);

//-----------------------------------------------------------------------------

//  const datos = {
//      "nombre":"Juan luis",
//      "Puesto":"Programador",
//      "edad":25,
//      "lenguajes":["Java","Javascript","fluter"],
//      "HomeOficce":true,
//      "rangoProfesional": {
//          "aniosExpertis": 6,
//          "nivel": "Senior",
//      }
//    }


//  const datos2 = ({nombre, puesto, nivel}) =>{
//      console.log(nombre, puesto, nivel);
//  }

//  console.log(datos2);


//--------------------------------------------------------------------------------


//  function comparar(numero1, numero2){
//    if(numero1>numero2){
//      console.log("este numero si es mayor");

//    }else{
//      console.log("No es mayor");
//    } 
//  }

//comparar(5, 3);

let comparar = (a,b) => a > b;

console.log (comparar (5,3));




































































