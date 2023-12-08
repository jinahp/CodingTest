function solution(arr) {
    let answer = 0;
    for (let v of arr) {
        let count = 0;
        while(v > 1) {
            if (v % 2 === 0) {
                v /= 2;
            } else if (v % 2 !== 0) {
                v = (v - 1) / 2;
            }
            count++;
        }
        answer += count;
    }
    return answer;
}