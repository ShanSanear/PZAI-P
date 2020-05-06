function byField(field) {
    return (a, b) => a[field] > b[field];
}

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];
'name' |> byField |> users.sort;
users.forEach(user => alert(user.name)); // Ann, John, Pete

'age' |> byField |> users.sort;
users.forEach(user => alert(user.name)); // Pete, Ann, John