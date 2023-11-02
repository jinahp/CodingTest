function solution(arr, n) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 === 1) {
            answer.push(i % 2 ? arr[i] : arr[i]+n);
        } else {
            answer.push(i % 2 ? arr[i]+n : arr[i]);
        }
    }
    return answer;
}