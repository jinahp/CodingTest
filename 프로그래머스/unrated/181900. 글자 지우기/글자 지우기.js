function solution(my_string, indices) {
    // let answer = '';
    // for (let i = 0; i < my_string.length; i++) {
    //     if (!indices.includes(i)) {
    //         answer += my_string[i];
    //     }
    // }
    return [...my_string].filter( (v,i) => !indices.includes(i)).join("");
}