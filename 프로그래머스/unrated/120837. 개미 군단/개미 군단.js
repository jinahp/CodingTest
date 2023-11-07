function solution(hp) {
    let answer = 0;
    let ants = [5, 3, 1];
    for (let i = 0; i < ants.length; i++) {
        answer += Math.floor(hp / ants[i])
        hp %= ants[i];
    } 
    return answer;
}