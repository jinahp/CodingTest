function solution(num_list) {
    let even = [];
    let odd = [];
    for(i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even.push(num_list[i]);
        } else {
            odd.push(num_list[i]);
        }
    }

    return parseInt(even.join('')) + parseInt(odd.join(''));
}

/* 
    let even = 0;
    let odd = 0;
    for(i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            even *= 10;
            even += num_list[i];
        } else {
            odd *= 10;
            odd += num_list[i];
        }
    }
    return even + odd;

*/