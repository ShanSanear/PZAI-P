function getAverageAge(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element.age
    }
    return sum / arr.length
}

let john = {name: "John", age: 25}
let pete = {name: "Pete", age: 30}
let mary = {name: "Mary", age: 29}

let arr = [john, pete, mary]

alert(getAverageAge(arr))