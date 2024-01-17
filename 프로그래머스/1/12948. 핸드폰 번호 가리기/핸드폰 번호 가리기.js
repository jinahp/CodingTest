function solution(number) {
    return '*'.repeat(number.length - 4) + number.slice(-4); // slice(-4): 문자열의 끝에서부터 4개의 문자를 추출
}