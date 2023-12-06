function solution(s) {
    let arr = [...s];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            count = 0;
        } else {
            count += 1;
        }
        arr[i] = count % 2? arr[i].toUpperCase() : arr[i].toLowerCase();
    }
    return arr.join("");
}