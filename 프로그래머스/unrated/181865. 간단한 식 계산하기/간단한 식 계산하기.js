function solution(binomial) {
    let [a, op, b] = binomial.split(" ");
    let numA = +a;
    let numB = +b;
    
    if (op === '+') {
        answer = numA + numB;
    } else if (op === '-') {
        answer = numA - numB;
    } else if (op === '*') {
        answer = numA * numB;
    }
    return answer;
}