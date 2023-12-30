function solution(i, j, k) {
  let count = 0;
  
  for (let num = i; num <= j; num++) {
    const str = num.toString().split('');
    const kCount = str.filter(v => parseInt(v) === k).length;
    
    count += kCount;
  }
  
  return count;
}