function solution(seoul) {
    let answer = '';
    for (let v of seoul) {
        if(v.includes('Kim')) {
            answer += `김서방은 ${seoul.indexOf(v)}에 있다`;
        }
    }
    return answer;
}