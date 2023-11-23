const names = ['sharif', 'sharifa', 'faruk', 'jafor', 'kapor'];

//insertion: time complexity is depends on where we want to insert. Like, if we insert end of the array then the time complexity is O(1) but if we want ot insert in begining in the array then the time complexity will be O(n) (it will depends on array size that is why n)

//searching: time complexity is O(n)
function findName(names, name){

    for(let i = 0; i < names.length; i++){
        if(names[i] === name){
            return `The ${name} is exist in the ${i}`;
        }
    }

    return `${name} is not found`;
}

console.log(findName(names, 'faruk'));


//access: O(1)
console.log(names[3]);