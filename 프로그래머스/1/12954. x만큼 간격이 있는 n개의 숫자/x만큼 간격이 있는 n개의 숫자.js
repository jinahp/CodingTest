function solution(x, n) {
    let answer = [];
    for ( i = 1; i <= n ; i++) {
        answer.push(i * x);
    }
    return answer;
}