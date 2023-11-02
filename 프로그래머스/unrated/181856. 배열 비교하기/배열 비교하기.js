function solution(arr1, arr2) {
    let answer = 0;
    let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
    
    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length > arr2.length) {
        answer = 1;
    } else {
        if (sum1 < sum2) {
            answer = -1;
        } else if (sum1 > sum2) {
            answer = 1;
        }
    }
    return answer;
}