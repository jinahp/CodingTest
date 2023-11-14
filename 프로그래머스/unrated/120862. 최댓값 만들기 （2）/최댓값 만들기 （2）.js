function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let [min1, min2] = numbers;
    let max1 = numbers.pop();
    let max2 = numbers.pop();
    return Math.max(min1 * min2, max1 * max2);
}