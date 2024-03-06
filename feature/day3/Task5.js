// 5. Write a program to print all even number first and then all odd numbers using only one iteration



let num = 100;
let even = 2;
let odd = 1;
for(let i = 1 ; i <= num ; i++){
    if(i<= num/2){
        console.log(even);
        even+=2;
    }else{
        console.log(odd);
        odd+=2;
    }
    
    
}

