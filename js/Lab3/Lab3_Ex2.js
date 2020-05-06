function getMaxSubSum(arr) {
    let best_sum = 0;
    let current_sum = 0;
    let i;
    for (i = 0; i < arr.length; i++) {
        current_sum = Math.max(0, current_sum + arr[i])
        best_sum = Math.max(best_sum, current_sum)
    }
    return best_sum
}

alert(getMaxSubSum([-1, 2, 3, -9]))
alert(getMaxSubSum([-1, 2, 3, -9, 11]))
alert(getMaxSubSum([-2, -1, 1, 2]))
alert(getMaxSubSum([100, -9, 2, -3, 5]))
alert(getMaxSubSum([1, 2, 3]))