arr = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= 55 && arr[i][1] >= 7) {
        arr[i] = 'Senior';
    }
    else {
        arr[i] = 'Open'
    }
}
console.log(arr)