function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++){
        if ( n % 2 === 1 && i % 2 === 1 ) {
            answer += i;
        } else if ( n % 2 === 0 && i % 2 === 0) {
            answer += i * i;
        }
    }
    return answer;
}