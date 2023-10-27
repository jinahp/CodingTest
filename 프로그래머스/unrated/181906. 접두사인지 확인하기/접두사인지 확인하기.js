function solution(my_string, is_prefix) {
    let str = my_string.startsWith(is_prefix);
    return str ? 1 : 0;
}