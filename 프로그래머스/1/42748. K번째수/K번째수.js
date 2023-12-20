function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const slicedArr = array.slice(command[0] - 1, command[1]);
        
        const sortedArr = slicedArr.slice().sort((a, b) => a - b);
        const k = sortedArr.splice(command[2] - 1, 1)[0];

        answer.push(k);
    }

    return answer;
}
