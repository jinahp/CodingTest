function solution(myStr, num1, num2) {
    return myStr.replace(/./g, (char, i) => {
        if (i === num1) {
            return myStr[num2];
        } else if (i === num2) {
            return myStr[num1];
        } else {
            return char;
        }
    });
}