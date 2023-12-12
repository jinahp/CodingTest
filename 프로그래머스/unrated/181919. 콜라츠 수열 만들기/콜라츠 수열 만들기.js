function solution(n) {
    let answer = [];
    while ( 1 !== n ) {
        answer.push(n);
        if ( n % 2 === 0 ) {
            n /= 2;
        } else if ( n % 2 === 1 ) {
            n = 3 * n + 1;
        }
    }
    answer.push(1);
    return answer;
}