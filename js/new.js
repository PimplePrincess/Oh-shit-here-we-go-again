"use strict";

// const first = 4;

// switch(first){
//     case 0:
//         console.log("Перемненая равна 0");
//         break;
//     case 1:
//         console.log("Переменная равна 1");
//         break;
//     case 2:
//         console.log("Переменная равна 2");
//         break;
//     case 3:
//         console.log("Переменная равна 3");
//         break;
//     default:
//         console.log("Неизвестное значение переменной");
//         break;
// }


// if (1){
//     console.log("Yes, that's true!");
// } else{
//     console.log("No, it's bullshit!");
// }
// (first <= second) ? console.log("Yeah!") : console.log("Bullshit!");

console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);
console.log(true && !4);