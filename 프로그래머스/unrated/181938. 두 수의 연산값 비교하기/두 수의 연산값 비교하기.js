function solution(a, b) {
    let answer = +(String(a) + String(b));
    let twoAB  = 2 * a * b;
    if (twoAB > answer) {
        return twoAB;
    } 
    return answer;
}