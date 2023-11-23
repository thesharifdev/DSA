const instructor = {
    firstName: "M",
    lastName: "Muhit",
    favoriteNumber: [1, 3, 7, 9, 13]
}

//time complexity is O(n)
console.log(Object.keys(instructor));

//time complexity is O(n)
console.log(Object.entries(instructor));

//time complexity is O(n)
console.log(Object.values(instructor));

//time complexity is O(n)
console.log(instructor.hasOwnProperty("lastName"));