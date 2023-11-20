/**
 * Perfomance testing
 */ 
function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t11 = performance.now();
addUpTo(10000000000);
let t12 = performance.now();

console.log(`Time taken ${(t12 - t11)/1000} seconds with looping system.`);

 function addUpTo2(n){
    return n * (n+1) / 2;
 }

let t21 = performance.now();
addUpTo2(10000000000);
let t22 = performance.now();

console.log(`Time taken ${(t22 - t21)/1000} seconds with formula system.`);

