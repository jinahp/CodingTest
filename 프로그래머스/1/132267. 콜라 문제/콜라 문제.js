function solution(a, b, n) {
    if (n < a) return 0;
    let next = Math.floor(n / a) * b;
    return next + solution(a, b, next + n % a);
}