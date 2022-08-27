"use strict";

const lenght = 6,
      height = 6;

let stroka = '';

for(let i = 0; i < height; i++){ //столбец
    for(let j = 0;  j < lenght; j++){ //строка
     if (j <= i){
        stroka += '*';
        break;
     }
     else if( i < j ){
        continue;
     }
    }
    console.log(stroka);
}    



