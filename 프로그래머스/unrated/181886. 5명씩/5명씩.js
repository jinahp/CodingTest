function solution(names) {
    let answer = [];
    for (let i = 0; i < names.length; i += 5) {
            let first = names.slice(i, i + 5);       
            answer.push(first[0]);
    }
    return answer;
}