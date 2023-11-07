function solution(myString) {
    return myString.split('x').filter( (i) => i !== '').sort( (a, b) => a.localeCompare(b) );
    
}