const cont = 10;
const array = new Array(cont);
for ( let i = 0; i < cont; i++){
    array[i] = new Array(cont).fill(null);
}

array[0][0] = '|';
array[1][0] = '|';
array[2][0] = '|';
array[3][0] = '|';
array[4][0] = '|';
array[5][0] = '|';
array[6][0] = '|';
array[7][0] = '|';
array[8][0] = '|';
array[9][0] = '|';

array[0][9] = '|';
array[1][9] = '|';
array[2][9] = '|';
array[3][9] = '|';
array[4][9] = '|';
array[5][9] = '|';
array[6][9] = '|';
array[7][9] = '|';
array[8][9] = '|';
array[9][9] = '|';

array[9][1] = '_';
array[9][2] = '_';
array[9][3] = '_';
array[9][4] = '_';
array[9][5] = '_';
array[9][6] = '_';
array[9][7] = '_';
array[9][8] = '_';


console.log(array);

//Metodo de relleno con lista
//let array = new Array(5).fill(()=>{return `USUARIO NO ENVIO NADA`;});
//array.fill("miguel",1,4);
//let id = 3;
//if(typeof(array[id])!="function"){
//    console.log(array[id]);
//}else{
//    console.log(array[id]());
//}

//Libreria matematica

let raiz_cuadrada = Math.sqrt(25);
console.log(raiz_cuadrada);
let raiz_cubica = Math.cbrt(27);
console.log(raiz_cubica);
let mayor = Math.max(1,5,8,34,278);
console.log(mayor);
let menor = Math.min(1,5,83,8,4214,-1);
console.log(menor);


//function randomIntFromInterval(min, max) { 
//    return Math.floor(Math.random() * (50 - 15 + 1) + 15);
//  }

let aleatorio = Math.random()*100;
document.write(aleatorio.toString()+'<br>');
document.write(Math.round(aleatorio)+'<br>');
document.write(Math.trunc(aleatorio)+'<br>');

console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);