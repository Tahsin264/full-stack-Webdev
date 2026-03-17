// first of all lets see waht a normal function do i.e synchronous functions 

// creating function for calculating the sum of numbers from 1 to n.

function add(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}

// calling of the function
let ans = add(5);
console.log(ans);



