function unique(arr) {
    return Array.from(new Set(arr))
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"]

alert(unique(strings))