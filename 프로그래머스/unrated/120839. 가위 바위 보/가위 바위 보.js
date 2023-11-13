function solution(rsp) {
    let win = { '2': '0', '0': '5', '5': '2' };
    let winners = rsp.split('').map(i => win[i]);
    
    return winners.join('');
}