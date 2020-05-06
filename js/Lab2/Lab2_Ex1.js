function multiplyNumeric(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (!isNaN(value)) {
      obj[key] = value * 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My Menu"
}

multiplyNumeric(menu)

for (let [key, value] of Object.entries(menu)) {
  console.log(`${key}: ${value}`);
}
