function solution(x) {
    let arr = [...String(x)];
    let sum = arr.reduce((prev, cur) => prev + +cur, 0);
    return x % sum === 0;
}