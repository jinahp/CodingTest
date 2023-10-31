function solution(num_str) {
    let sum = 0;
    for (let i of num_str) {
        sum += parseInt(i);
    }
    return sum;
}