function solution(a, b) {
    if (a === b) {
      return b;  
    } 
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}
// 1 2 3 4 = 10
// 4 3 2 1 = 10
// 5 5 5 5 = 20

// 5 4 3
// 3 4 5
// 8 8 8