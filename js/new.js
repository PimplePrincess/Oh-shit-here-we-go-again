"use strict";

// Рисунок треугольника
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


for(let i = 20; i >= 10; i--){
    if(i === 13){
        break;
    }
    else{
        console.log(i);
    }
    
}

for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


for (let i = 2; i <= 16; i++) {
    while(i % 2 !== 0){
        console.log(i);
        break;
    }
}

const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++){
    arrayOfNumbers [i - 5] = i;
       

      
    
} 
console.log(arrayOfNumbers);