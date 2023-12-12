function solution(t, p) {
    let answer = 0;
    let pLength = p.length;
    p = +p;
    for (let i = 0; i <= t.length - pLength; i++) {
        let sub = +t.substr(i, pLength);
        if(sub <= p) {
            answer += 1;
        }
    }
    return answer;
}