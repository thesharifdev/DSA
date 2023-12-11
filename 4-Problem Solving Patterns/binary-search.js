function serach(sortedNumArray, neddle){

    let min = 0;
    let max = sortedNumArray.length - 1;

    while( min <= max ){
        
        let middle = Math.floor(( min + max ) / 2);
        let currentElement = sortedNumArray[middle];

        if(currentElement < neddle){
            min = middle + 1;
        }else if(currentElement > neddle){
            max = middle -1;
        }else{
            return middle;
        }
    }

    return -1;
}

console.log(serach([1, 3, 4, 5, 5, 7, 10, 13, 20], 13));