function solution(numlist, n) {
    return numlist.sort( (a, b) => {
        let deltaA = Math.abs(n - a);
        let deltaB = Math.abs(n - b);
        if ( deltaA === deltaB ) {
            return b - a;
        }
        return deltaA - deltaB;
    });
}