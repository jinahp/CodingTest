function solution(myString, pat) {
    let arr = [];
    for(let i = 0; i < myString.length; i++) {
        arr.push(myString[i] === 'A' ? 'B' : 'A');
    }
    return arr.join('').includes(pat)? 1 : 0;
}