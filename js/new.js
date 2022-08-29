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


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
}


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++){
    if(typeof(data[i]) === 'string'){
        data[i] +=' - done';
    } else{
        data[i] = data[i] * 2;
    }
}


const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = 0; i < data1.length; i++){
    result1[data1.length - i - 1] = data1[i];
}
console.log(result1);

//     *
//    ***
//   *****
//  *******
// *********
//***********

const lines = 5;
let result2 = '';

for (let i = 0; i <= lines; i++){
    for (let j = 0; j <= lines; j++){
        if( j === lines ){
            result2 += '*\n';
            break;
        } 
        else if(j >= (lines - i) && j <= (lines + i)){
            result2 += '*';
            result2 += '*';
            
        }
        else if(j < (lines - i)){
            result2 += ' ';
        }

        else{
            continue;
        }
    }
}
console.log(result2);

const stroka2 = '';
console.log(stroka2.length);