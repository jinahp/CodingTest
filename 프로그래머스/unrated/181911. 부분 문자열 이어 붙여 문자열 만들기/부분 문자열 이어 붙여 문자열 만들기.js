function solution(my_strings, parts) {
    let answer = '';
    for (let i = 0; i < my_strings.length; i++) {
        let [s, e] = parts[i];
        let result = my_strings[i].substring(s, e + 1);
        answer += result;
    }
    return answer;
}