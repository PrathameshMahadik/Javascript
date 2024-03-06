// 4. Write a program to print all even number first and then all odd numbers
let num = 50;
for(let i = 1 ; i <= 100 ; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

for(let i = 1 ; i <= num ; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
