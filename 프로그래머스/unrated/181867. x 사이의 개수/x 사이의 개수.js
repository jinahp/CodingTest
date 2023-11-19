function solution(myString) {
    let answer = myString.split('x');
    return answer.map(x => x.length);
}