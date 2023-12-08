function solution(arr, flag) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (flag[i]) {
            for (let j = 0; j < n * 2; j++) {
                answer.push(n);
            }
        } else {
            answer.splice(-n, n);
        }
    }
    return answer;
}