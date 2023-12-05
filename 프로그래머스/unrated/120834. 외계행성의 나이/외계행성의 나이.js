function solution(age) {
    let arr = [...String(age)];
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += String.fromCharCode(97 + +arr[i]);
    }
    return result;
}