// 4. Write a program to print all even number first and then all odd numbers
//printed even & odd numbers between 1 - 50
let num = 50;
for(let i = 1 ; i <= num ; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
for(let i = 1 ; i <= num ; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
