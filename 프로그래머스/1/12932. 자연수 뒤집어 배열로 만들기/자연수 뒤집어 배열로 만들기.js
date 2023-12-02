function solution(n) {
    let str = String(n);
    let arr = [...str];
    return arr.reverse().map(item => +item);
}