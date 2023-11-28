function countUniqueNumber(nums){

    let uniqueNumbers = [];

    for(let i = 0; i < nums.length; i++){

        let num = nums[i];

        if(uniqueNumbers.indexOf(num) === -1){

            uniqueNumbers.push(num);

        }

    }

    return uniqueNumbers.length;
}

let myArr = [1, 3, 4, 4, 5, 4, 4, 4, 4, 4];

console.log(countUniqueNumber(myArr));