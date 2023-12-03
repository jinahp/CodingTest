function solution(n) {
    let str = String(n);
    let arr = [...str];
    arr.sort((a,b) => b - a);
    return +arr.join("");
}