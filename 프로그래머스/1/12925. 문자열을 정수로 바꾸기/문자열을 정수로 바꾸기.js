function solution(s) {
    let plus = true;
    let answer = '';
    for(i = 0; i < s.length; i++) {
        if (s[i] === '+') {
            plus = true;
        } else if (s[i] === '-') {
            plus = false;
        } else {
            answer += s[i];
        }
        console.log(plus, s[i]);
    }
    return plus? +answer : -answer;
}