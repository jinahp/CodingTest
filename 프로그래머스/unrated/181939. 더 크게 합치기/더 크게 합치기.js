function solution(a, b) {
    let ab = +String(a).concat(b);
    let ba = +String(b).concat(a);
    return ab >= ba ? ab : ba;
}