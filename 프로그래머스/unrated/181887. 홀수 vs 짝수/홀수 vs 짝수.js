function solution(num_list) {
    let answer = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) {
            even += num_list[i];
        } else {
            answer += num_list[i];
        }
    }
    return answer > even ? answer : even;
}