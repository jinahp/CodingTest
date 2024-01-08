function solution(s) {
    let charArray = Array.from(s);
    let sorted = charArray.sort((a, b) => {
        const charCodeA = a.charCodeAt(0);
        const charCodeB = b.charCodeAt(0);

        return charCodeB - charCodeA || s.indexOf(a) - s.indexOf(b);
    });

    return sorted.join('');
}
