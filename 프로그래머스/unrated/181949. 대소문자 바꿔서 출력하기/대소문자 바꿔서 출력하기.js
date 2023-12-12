const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
    console.log(solution(input));
});

let a = 'a'.charCodeAt(0);
let A = 'A'.charCodeAt(0);

function solution(str) {
    let arr = [...str];
    return arr.map( (v) => {
        if (v.charCodeAt(0) >= a) {
            return v.toUpperCase();
        } else {
            return v.toLowerCase();
        }
    }).join('');
}
