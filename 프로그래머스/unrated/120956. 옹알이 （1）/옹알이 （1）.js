function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"];
    let result = 0;

    for (let i = 0; i < babbling.length; i++) {
        let str = babbling[i];
        for (let j = 0; j < arr.length; j++) {
            str = str.replace(arr[j], '_');
        }
        
        if (str.replaceAll('_', '').length === 0) {
            result += 1;
        }
    }

    return result;
}