function solution(my_string, s, e) {
    let arr = [...my_string];
    let prefix = arr.slice(0, s);
    let reversed = arr.slice(s, e+1).reverse();
    let suffix = arr.slice(e+1, arr.length);
    return [...prefix, ...reversed, ...suffix].join('');
}
