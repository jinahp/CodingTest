function solution(arr) {
    let X = [];
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        X = X.concat(Array(num).fill(num));
    }
    return X;
}


