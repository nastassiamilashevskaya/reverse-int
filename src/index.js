module.exports = function reverse (n) {
    if (n < 0) {
        n = String(n).split('');
        let sign = n.shift();
        n = n.reverse().join('');
    } else {
        n = String(n).split('').reverse().join('');
    }
    return Number(n);
}
