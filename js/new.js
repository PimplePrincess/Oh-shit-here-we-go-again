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


        //ФУНКЦИИ
function firstFun(){
    console.log('Its my first function!');
}
firstFun();

        //ЗАДАЧА №1
function sayHello(name){
    let greeding = `Привет, ${name}`; 
    return greeding;
}
let res = sayHello('Kate');
console.log(res);

        //ЗАДАЧА №2
function returnNeighboringNumbers(number){
    let arr = [number - 1, number, number + 1];
    return arr;
}
let resultat = returnNeighboringNumbers(5);
console.log(resultat);

        // ЗАДАЧА №3
function getMathResult(num1, num2){
    let strochka = '';
    let oldNum1 = num1; 
    let newNum1;
    if(typeof(num2) != 'number' || num2 <= 0){
        return num1;
    }
    strochka += String(num1) + '---';
    for (let i = 1; i <= num2 - 1; i++){
        num1 += oldNum1;
        newNum1 = String(num1);
        if (i < num2 - 1){
            strochka += newNum1;
            strochka +='---';
        }
        else{
            strochka += newNum1;
        }    
    } 
    return strochka;
}
const resUltat = getMathResult(5,0);
console.log(resUltat);

const st = "gegege1.54.3";
console.log(parseInt(st));