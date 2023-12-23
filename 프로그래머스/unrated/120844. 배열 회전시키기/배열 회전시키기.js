function solution(numbers, direction) {
    if(direction === 'right') {
        return [numbers.pop(), ...numbers];
    } else {
        let first = numbers.shift();
        return [...numbers, first];
    }
}