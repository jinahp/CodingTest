function solution(myString) {
    let answer = [];
    for (let i of myString) {
        let charCode = i.charCodeAt();
        if(charCode >= 97 && charCode <= 122) {
            let upper = String.fromCharCode(charCode - 32);
            answer.push(upper);
        } else {
            answer.push(i);
        }
    }
    return answer.join('');
}



/*
function solution(myString) {    
    return myString.toUpperCase();
}
*/