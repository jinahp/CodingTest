function solution(arr, idx) {
    arr = arr.map( (item, i) => i >= idx && item === 1 ? i : -1).filter( x => x !== -1);
    return arr.length? Math.min(...arr) : -1;
}