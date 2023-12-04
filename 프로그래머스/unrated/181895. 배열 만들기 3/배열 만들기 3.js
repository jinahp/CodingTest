function solution(arr, intervals) {
    let answer = arr.slice(intervals[0][0], intervals[0][1]+1);
    return answer.concat(arr.slice(intervals[1][0], intervals[1][1]+1));
}