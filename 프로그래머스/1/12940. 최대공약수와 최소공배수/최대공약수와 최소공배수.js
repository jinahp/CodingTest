function gcd(a, b) {
    if (b == 0) return a;
    else return gcd(b, a % b);
}

function solution(n, m) {
    return [gcd(n, m), n * m / gcd(n, m)];
}