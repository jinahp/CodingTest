function solution(num_list, n) {
    let answer = [];
    for ( i = n; i <= num_list.length; i++) {
        answer.push(num_list[i-1]);
    }
    return answer;
}