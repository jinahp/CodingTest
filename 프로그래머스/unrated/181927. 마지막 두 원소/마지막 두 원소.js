function solution(num_list) {
    let arr = [...num_list];
    let lastIndex = arr.length - 1;
    if(num_list[lastIndex] > num_list[lastIndex-1]) {
        arr.push(num_list[lastIndex]-num_list[lastIndex-1]);
    } else {
        arr.push(num_list[lastIndex]*2);
    }
    return arr;
}