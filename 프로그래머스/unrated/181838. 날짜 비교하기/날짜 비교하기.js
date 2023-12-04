function solution(date1, date2) {
    let str1 = +date1.join("");
    let str2 = +date2.join("");
    return str1 < str2 ? 1 : 0;
}