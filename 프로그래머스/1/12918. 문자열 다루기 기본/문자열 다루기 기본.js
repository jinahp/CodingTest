function solution(s) {
    let numbers = '';
    for (let i = 0; i < 10; i++) {
        numbers += i;
    }
    return [...s].every(v => numbers.includes(v)) && [4, 6].includes(s.length);
}