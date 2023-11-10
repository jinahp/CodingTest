function solution(my_string) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        let charCode = my_string[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            answer += String.fromCharCode(charCode + 32);
        } else if (charCode >= 97 && charCode <= 122) {
            answer += String.fromCharCode(charCode - 32);
        } else {
            answer += my_string[i];
        }
    }
    return answer;
}